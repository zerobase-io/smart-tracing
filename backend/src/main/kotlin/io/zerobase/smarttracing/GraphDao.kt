package io.zerobase.smarttracing

import io.zerobase.smarttracing.models.DeviceId
import io.zerobase.smarttracing.models.Fingerprint
import io.zerobase.smarttracing.models.QrCode
import io.zerobase.smarttracing.models.ScanId
import org.neo4j.driver.Driver
import java.util.*

class GraphDao(private val driver: Driver) {

    fun createDevice(fingerprint: Fingerprint?, ip: String?): DeviceId? {
        return driver.session().use { session ->
            session.writeTransaction { txn ->
                val result = txn.run(
                        "CREATE (d:Device {id: '${UUID.randomUUID()}', fingerprint: '${fingerprint?.value ?: "none"}', initialIp: '${ip ?: "none"}'}) RETURN d.id as id"
                ).single()["id"].asInt()
                return@writeTransaction result?.let { DeviceId("$it") }
            }
        }
    }

    fun recordCheckIn(device: DeviceId, qrCode: QrCode): ScanId? {
        return driver.session().use {
            it.writeTransaction { txn ->
                val result = txn.run(
                        """
                            MATCH (d:Device) WHERE ID(d) = $device
                            MATCH (qr:QrCode) WHERE ID(qr) = $qrCode
                            CREATE (d)-[r:SCAN{id: '${UUID.randomUUID()}', timestamp: TIMESTAMP()}]->(qr)
                            RETURN r.id as id
                        """.trimIndent()
                ).single()["id"].asString()
                return@writeTransaction result?.let { ScanId(it) }
            }
        }
    }
}
