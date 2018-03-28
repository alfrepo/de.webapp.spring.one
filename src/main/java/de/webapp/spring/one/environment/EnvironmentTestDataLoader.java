package de.webapp.spring.one.environment;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;

import java.util.Map;

public class EnvironmentTestDataLoader {
  private final Logger logger = LoggerFactory.getLogger(EnvironmentTestDataLoader.class);

  @Autowired
  private EnvironmentRepository environmentRepository;

  @Transactional
  public void loadData() {

    logger.info("init test data");
    Map<String, String> map = System.getenv();
    for (String key : map.keySet()) {
      Variable v = new Variable(key, map.get(key));
      environmentRepository.save(v);
    }
  }
}
