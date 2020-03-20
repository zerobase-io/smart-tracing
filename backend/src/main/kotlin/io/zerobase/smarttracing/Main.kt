package io.zerobase.smarttracing

import com.fasterxml.jackson.module.kotlin.KotlinModule
import io.dropwizard.Application
import io.dropwizard.Configuration
import io.dropwizard.assets.AssetsBundle
import io.dropwizard.setup.Bootstrap
import io.dropwizard.setup.Environment
import io.dropwizard.views.ViewBundle
import org.neo4j.driver.AuthTokens
import org.neo4j.driver.GraphDatabase

typealias ViewConfig = Map<String, Map<String, String>>

fun main(vararg args: String) {
    Main().run(*args)
}

class Main: Application<Config>() {
    override fun initialize(bootstrap: Bootstrap<Config>) {
        bootstrap.objectMapper.registerModule(KotlinModule())
//        bootstrap.addBundle(object: ViewBundle<Config>() {
//            override fun getViewConfiguration(configuration: Config): ViewConfig = configuration.views
//        })
//        bootstrap.addBundle(AssetsBundle("/public", "/", null))
    }

    override fun run(config: Config, env: Environment) {
        val driver = GraphDatabase.driver("bolt://localhost:7687", AuthTokens.basic("neo4j", "zerobase"))

        env.jersey().register(Router(GraphDao(driver)))
    }
}

data class Config(val views: ViewConfig = mapOf()): Configuration()
