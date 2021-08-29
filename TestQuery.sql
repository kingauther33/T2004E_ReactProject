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
SELECT * FROM dbo.Categories
SELECT * FROM dbo.Events
SELECT * FROM dbo.ConnectedBrands
SELECT * FROM dbo.Users
SELECT * FROM dbo.Recipes
SELECT * FROM dbo.CampaignComments
SELECT * FROM dbo.EventComments

DELETE FROM dbo.Campaigns
DELETE FROM dbo.Categories
DELETE FROM dbo.Events
DELETE FROM dbo.ConnectedBrands
DELETE FROM dbo.Users
DELETE FROM dbo.Recipes
DELETE FROM dbo.CampaignComments
DELETE FROM dbo.EventComments
