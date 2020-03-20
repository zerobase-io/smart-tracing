package io.zerobase.smarttracing

import de.neuland.jade4j.Jade4J
import de.neuland.jade4j.JadeConfiguration
import de.neuland.jade4j.template.ClasspathTemplateLoader
import de.neuland.jade4j.template.FileTemplateLoader
import io.dropwizard.views.View
import io.dropwizard.views.ViewRenderer
import io.zerobase.smarttracing.views.PugView
import java.io.OutputStream
import java.io.OutputStreamWriter
import java.util.*

private val PUG_EXTENSION = ".+\\.pug".toRegex()

class PugViewRenderer: ViewRenderer {

    private lateinit var renderConfig: JadeConfiguration

    override fun getConfigurationKey(): String = "pug"
    override fun isRenderable(view: View): Boolean = view is PugView && PUG_EXTENSION.matches(view.templateName)

    override fun configure(options: Map<String, String>) {
        renderConfig = JadeConfiguration()
//        renderConfig.templateLoader = ClasspathTemplateLoader("UTF-8", "pug")
        renderConfig.templateLoader = FileTemplateLoader("templates", "UTF-8", "pug")
    }

    override fun render(view: View, locale: Locale, output: OutputStream) {
//        val template = renderConfig.getTemplate("templates/" + view.templateName)
        val template = renderConfig.getTemplate(view.templateName)
        OutputStreamWriter(output).use {
            Jade4J.render(template, (view as PugView).asMap(), it)
        }
    }
}
