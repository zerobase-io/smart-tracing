package io.zerobase.smarttracing

import com.fasterxml.jackson.annotation.JsonProperty
import io.zerobase.smarttracing.models.DeviceId
import io.zerobase.smarttracing.models.Fingerprint
import javax.ws.rs.*
import javax.ws.rs.core.MediaType

open class ApiResponse(val success: Boolean,
                       val session: Boolean = false,
                       val message: String? = null
)
data class DeviceCreatedResponse(@JsonProperty("dvid") val id: String): ApiResponse(success = true)
data class ScanRecordedResponse(@JsonProperty("scan") val id: String): ApiResponse(success = true)

data class CreateDeviceRequest(val fingerprint: String?, val ip: String?)
data class CheckInRequest(@JsonProperty("dvid") val scanningDevice: String, @JsonProperty("sdvid") val scannedDevice: String)

@Path("/")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
class Router(val dao: GraphDao) {

    @Path("/c/{unused: .+?}")
    @POST
    fun createDevice(req: CreateDeviceRequest): ApiResponse {
        val id = dao.createDevice(req.fingerprint?.let{ Fingerprint(it) }, req.ip)
        return when (id) {
            null -> ApiResponse(success = false, message = "Sorry, there was an error processing your account, please try again.")
            else -> DeviceCreatedResponse(id.value)
        }
    }

    @Path("/s-id/{deviceId}")
    @POST
    fun recordCheckIn(@PathParam("deviceId") deviceId: DeviceId, req: CheckInRequest): ApiResponse {
        val id = dao.recordPeerToPeerScan(DeviceId(req.scanningDevice), DeviceId(req.scannedDevice))
        return when (id) {
            null -> ApiResponse(success = false, message = "At least one provided ID is not valid.")
            else -> ScanRecordedResponse(id.value)
        }
    }
}
