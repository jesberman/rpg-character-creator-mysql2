USE rpg_db;

DROP TABLE IF EXISTS characters2;

CREATE TABLE characters2 (
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  name VARCHAR(30) NOT NULL,
  battle_cry VARCHAR(30) NOT NULL,
  class VARCHAR(30),
  health INTEGER(10),
  attack INTEGER(10),
  mana INTEGER(10),
  created_at VARCHAR(30),
  PRIMARY KEY (id)
);