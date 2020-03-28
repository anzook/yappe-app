USE yappe_db;

INSERT INTO PETS (name, age, sex, breed)
VALUE ("Scruffy",  3, "male", "rotweiler"), ("Barky", 2, "female", "terrier");


-- Create a new table called 'TableName' in schema 'SchemaName'
-- Drop the table if it already exists
IF OBJECT_ID('SchemaName.TableName', 'U') IS NOT NULL
DROP TABLE SchemaName.TableName
GO
-- Create the table in the specified schema
CREATE TABLE SchemaName.TableName
(
    TableNameId INT NOT NULL PRIMARY KEY, -- primary key column
    Column1 [NVARCHAR](50) NOT NULL,
    Column2 [NVARCHAR](50) NOT NULL
    -- specify more columns here
);
GO