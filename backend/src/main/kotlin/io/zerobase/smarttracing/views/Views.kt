package io.zerobase.smarttracing.views

import io.dropwizard.views.View

abstract class PugView(templateName: String): View(templateName) {
    abstract fun asMap(): Map<String, Any>
}

data class IndexView(val section: String = "home"): PugView("/views/index.pug") {
    override fun asMap(): Map<String, Any> = mapOf("section" to section)
}
