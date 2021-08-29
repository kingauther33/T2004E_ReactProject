GO
    USE T2004E_ReactProject

GO

GO
    USE master

GO
ALTER DATABASE T2004E_ReactProject
SET SINGLE_USER --or RESTRICTED_USER
WITH ROLLBACK IMMEDIATE;
GO
DROP DATABASE T2004E_ReactProject;
GO

SELECT * FROM dbo.Campaigns;

DELETE FROM dbo.Campaigns
DELETE FROM dbo.Categories
DELETE FROM dbo.Events
DELETE FROM dbo.ConnectedBrands
DELETE FROM dbo.ConnectedBrands
DELETE FROM dbo.ConnectedBrands
DELETE FROM dbo.ConnectedBrands
DELETE FROM dbo.ConnectedBrands
DELETE FROM dbo.ConnectedBrands
DELETE FROM dbo.ConnectedBrands