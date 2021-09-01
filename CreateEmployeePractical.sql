IF NOT EXISTS(SELECT * FROM sys.databases WHERE name = 'T2004E_PracticalEAP')
BEGIN
CREATE DATABASE T2004E_PracticalEAP


END
GO
    USE T2004E_PracticalEAP

GO

IF NOT EXISTS (SELECT * FROM sys.tables t join sys.schemas s ON (t.schema_id = s.schema_id) WHERE s.name='dbo' and t.name='Employee')
CREATE TABLE [dbo].[Employee]
(
 [Id]          int IDENTITY (1, 1) NOT NULL ,
 [StudentID]   nvarchar(max) NOT NULL ,
 [FirstName]   nvarchar(max) NOT NULL ,
 [LastName]    nvarchar(max) NOT NULL ,
 [PhoneNumber] nvarchar(max) NOT NULL ,
 [Email]       nvarchar(max) NOT NULL ,


 CONSTRAINT [PK_employee] PRIMARY KEY CLUSTERED ([Id] ASC)
);
GO

-- INSERT EMPLOYEES --
INSERT INTO dbo.Employee([StudentID],[FirstName], [LastName], [PhoneNumber], [Email]) values
	('T2004A', 'An', 'Doan Van', '0123456789', 'doanvanA@gmail.com'),
	('T2004B', 'Be', 'Doan Van', '0123456789', 'doanvanB@gmail.com'),
	('T2004C', 'Ce', 'Doan Van', '0123456789', 'doanvanC@gmail.com'),
	('T2004D', 'Dy', 'Doan Van', '0123456789', 'doanvanD@gmail.com'),
	('T2004E', 'En', 'Doan Van', '0123456789', 'doanvanE@gmail.com')
