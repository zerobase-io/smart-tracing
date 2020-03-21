package io.zerobase.smarttracing

import io.zerobase.smarttracing.models.DeviceId
import io.zerobase.smarttracing.models.Fingerprint
import io.zerobase.smarttracing.models.ScanId
import io.zerobase.smarttracing.models.SiteId
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

    fun recordPeerToPeerScan(scanner: DeviceId, scanned: DeviceId): ScanId? {
        return driver.session().use {
            it.writeTransaction { txn ->
                val result = txn.run(
                        """
                            MATCH (d:Device) WHERE ID(d) = ${scanner.value}
                            MATCH (d2:Device) WHERE ID(d2) = ${scanned.value}
                            CREATE (d)-[r:SCAN{id: '${UUID.randomUUID()}', timestamp: TIMESTAMP()}]->(d2)
                            RETURN r.id as id
                        """.trimIndent()
                ).single()["id"].asString()
                return@writeTransaction result?.let { ScanId(it) }
            }
        }
    }

    fun recordDeviceCheckIn(device: DeviceId, site: SiteId): ScanId? {
        return driver.session().use {
            it.writeTransaction { txn ->
                val result = txn.run(
                        """
                            MATCH (d:Device) WHERE ID(d) = ${device.value}
                            MATCH (s:Site) WHERE ID(s) = ${site.value}
                            CREATE (d)-[r:SCAN{id: '${UUID.randomUUID()}', timestamp: TIMESTAMP()}]->(s)
                            RETURN r.id as id
                        """.trimIndent()
                ).single()["id"].asString()
                return@writeTransaction result?.let { ScanId(it) }
            }
        }
    }
}
