CREATE TABLE "film" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(120) NOT NULL,
	"genre_id" INT,
    "release_date" DATE,
    "run_time" INT,
    "image_path" VARCHAR(2083)
);

CREATE TABLE "genre" (
    "id" SERIAL PRIMARY KEY,
    "genre" VARCHAR(80)
);

-- ^^ run these two for tables

-- vv notes

--ALTER TABLE "film"
--DROP COLUMN "genre";

SELECT * FROM "film";

SELECT * FROM "genre";


SELECT * FROM "film"
JOIN "genre" ON "film"."genre_id" = "genre"."id"
ORDER BY "genre"."genre";

--testing
--SELECT "f"."name", 
--       "f"."id", 
--       "f"."release_date",
--       "f"."run_time",
--       "f"."image_path",
--       "g"."genre" AS "genre"
--FROM "film" AS "f" JOIN "genre" as "g" 
--ON "f"."genre_id" = "g"."id";
