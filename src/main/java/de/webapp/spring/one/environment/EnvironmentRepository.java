package de.webapp.spring.one.environment;


import de.webapp.spring.one.users.User;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "environment", path = "environment")
public interface EnvironmentRepository extends PagingAndSortingRepository<Variable, String> {
  // fields having getter and setter are exposed automagically
}
