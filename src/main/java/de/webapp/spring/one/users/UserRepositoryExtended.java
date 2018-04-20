package de.webapp.spring.one.users;


import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "usersExtended", path = "usersExtended")
public interface UserRepositoryExtended extends PagingAndSortingRepository<UserExtended, String> {
  // fields having getter and setter are exposed automagically
}
