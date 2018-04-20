package de.webapp.spring.one;


import de.webapp.spring.one.environment.EnvironmentTestDataLoader;
import org.h2.tools.Server;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.context.annotation.Bean;

import java.sql.SQLException;

@SpringBootApplication
public class Application extends SpringBootServletInitializer {

// not needed anymore, since the db is initialized and fille via schema.sql and data.sql
//	@Bean(initMethod = "loadData")
//	UserTestDataLoader RepositoryTestDataUsers() {
//		return new UserTestDataLoader();
//	}

  @Bean(initMethod = "loadData")
  EnvironmentTestDataLoader RepositoryTestDataEnvironment() {
    return new EnvironmentTestDataLoader();
  }

	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}


  /**
   * Start internal H2 server so we can query the DB from IDE
   *
   * @return H2 Server instance
   * @throws SQLException
   */
  @Bean(initMethod = "start", destroyMethod = "stop")
  public Server h2Server() throws SQLException {
    return Server.createTcpServer("-tcp", "-tcpAllowOthers", "-tcpPort", "9092");
  }

}
