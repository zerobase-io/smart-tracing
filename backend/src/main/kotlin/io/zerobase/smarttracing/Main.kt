package io.zerobase.smarttracing

import com.fasterxml.jackson.module.kotlin.KotlinModule
import io.dropwizard.Application
import io.dropwizard.Configuration
import io.dropwizard.configuration.EnvironmentVariableSubstitutor
import io.dropwizard.configuration.SubstitutingSourceProvider
import io.dropwizard.setup.Bootstrap
import io.dropwizard.setup.Environment
import org.neo4j.driver.AuthTokens
import org.neo4j.driver.GraphDatabase
import java.net.URI

fun main(vararg args: String) {
    Main().run(*args)
}

class Main: Application<Config>() {
    override fun initialize(bootstrap: Bootstrap<Config>) {
        bootstrap.objectMapper.registerModule(KotlinModule())
        bootstrap.configurationSourceProvider = SubstitutingSourceProvider(
                bootstrap.configurationSourceProvider,
                EnvironmentVariableSubstitutor()
        )
    }

    override fun run(config: Config, env: Environment) {
        val driver = GraphDatabase.driver(config.database.url, AuthTokens.basic(config.database.username, config.database.password))

        env.jersey().register(Router(GraphDao(driver)))
    }
}

data class Config(val database: Neo4jConfig): Configuration()
data class Neo4jConfig(val url: URI, val username: String, val password: String)
