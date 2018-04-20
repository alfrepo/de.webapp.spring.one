CREATE TABLE user (
  id VARCHAR(50) NOT NULL,
  name VARCHAR(50),
  email VARCHAR(50),

  CONSTRAINT pk_t_user PRIMARY KEY (ID)
);

CREATE TABLE variable (
  name VARCHAR(50),
  value VARCHAR(4095),

  CONSTRAINT pk_t_variable PRIMARY KEY (name)
);
