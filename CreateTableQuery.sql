use T2004E_ReactProject;

IF NOT EXISTS (SELECT * FROM sys.tables t join sys.schemas s ON (t.schema_id = s.schema_id) WHERE s.name='dbo' and t.name='Users')
CREATE TABLE [dbo].[Users]
(
 [Id]              int IDENTITY (1, 1) NOT NULL ,
 [FullName]        nvarchar(max) NOT NULL ,
 [Email]           nvarchar(max) NOT NULL ,
 [Password]        nvarchar(max) NOT NULL ,
 [ConfirmPassword] nvarchar(max) NOT NULL ,
 [Role]            nvarchar(max) NOT NULL ,


 CONSTRAINT [PK_users] PRIMARY KEY CLUSTERED ([Id] ASC)
);
GO

IF NOT EXISTS (SELECT * FROM sys.tables t join sys.schemas s ON (t.schema_id = s.schema_id) WHERE s.name='dbo' and t.name='Events')
CREATE TABLE [dbo].[Events]
(
 [Id]          int IDENTITY (1, 1) NOT NULL ,
 [Title]       nvarchar(max) NOT NULL ,
 [Description] nvarchar(max) NOT NULL ,
 [Image]       nvarchar(max) NOT NULL ,
 [Content]     nvarchar(max) NOT NULL ,
 [Organizer]   nvarchar(max) NOT NULL ,
 [Location]    nvarchar(max) NOT NULL ,
 [StartDate]   datetime NOT NULL ,
 [EndDate]     datetime NOT NULL ,


 CONSTRAINT [PK_events] PRIMARY KEY CLUSTERED ([Id] ASC)
);
GO


IF NOT EXISTS (SELECT * FROM sys.tables t join sys.schemas s ON (t.schema_id = s.schema_id) WHERE s.name='dbo' and t.name='Categories')
CREATE TABLE [dbo].[Categories]
(
 [Id]    int IDENTITY (1, 1) NOT NULL ,
 [Name]  nvarchar(max) NOT NULL ,
 [Image] nvarchar(max) NOT NULL ,


 CONSTRAINT [PK_categories] PRIMARY KEY CLUSTERED ([Id] ASC)
);
GO

IF NOT EXISTS (SELECT * FROM sys.tables t join sys.schemas s ON (t.schema_id = s.schema_id) WHERE s.name='dbo' and t.name='Campaigns')
CREATE TABLE [dbo].[Campaigns]
(
 [Id]            int IDENTITY (1, 1) NOT NULL ,
 [Title]         nvarchar(max) NOT NULL ,
 [Description]   nvarchar(max) NOT NULL ,
 [Image]         nvarchar(max) NOT NULL ,
 [Content]       nvarchar(max) NOT NULL ,
 [TotalDonation] float NOT NULL ,
 [Sponsor]       nvarchar(max) NOT NULL ,
 [StartDate]     datetime NOT NULL ,
 [EndDate]       datetime NOT NULL ,


 CONSTRAINT [PK_Campaigns] PRIMARY KEY CLUSTERED ([Id] ASC)
);
GO

IF NOT EXISTS (SELECT * FROM sys.tables t join sys.schemas s ON (t.schema_id = s.schema_id) WHERE s.name='dbo' and t.name='Recipes')
CREATE TABLE [dbo].[Recipes]
(
 [Id]          int IDENTITY (1, 1) NOT NULL ,
 [Title]       nvarchar(max) NOT NULL ,
 [Image]       nvarchar(max) NOT NULL ,
 [Description] nvarchar(max) NOT NULL ,
 [PrepTime]    int NOT NULL ,
 [CookTime]    int NOT NULL ,
 [Ingredients] nvarchar(max) NOT NULL ,
 [Tools]       nvarchar(max) NOT NULL ,
 [CategoryID]  int NOT NULL ,


 CONSTRAINT [PK_foods] PRIMARY KEY CLUSTERED ([Id] ASC),
 CONSTRAINT [FK_47] FOREIGN KEY ([CategoryID])  REFERENCES [dbo].[Categories]([Id])
);
GO


CREATE NONCLUSTERED INDEX [fkIdx_48] ON [dbo].[Recipes] 
 (
  [CategoryID] ASC
 )

GO

IF NOT EXISTS (SELECT * FROM sys.tables t join sys.schemas s ON (t.schema_id = s.schema_id) WHERE s.name='dbo' and t.name='EventComments')
CREATE TABLE [dbo].[EventComments]
(
 [Id]        int IDENTITY (1, 1) NOT NULL ,
 [Comment]   nvarchar(max) NOT NULL ,
 [Rating]    int NOT NULL ,
 [CreatedAt] datetime NOT NULL ,
 [EventID]   int NOT NULL ,
 [UserID]    int NOT NULL ,


 CONSTRAINT [PK_eventcomment] PRIMARY KEY CLUSTERED ([Id] ASC),
 CONSTRAINT [FK_62] FOREIGN KEY ([EventID])  REFERENCES [dbo].[Users]([Id]),
 CONSTRAINT [FK_65] FOREIGN KEY ([UserID])  REFERENCES [dbo].[Events]([Id])
);
GO


CREATE NONCLUSTERED INDEX [fkIdx_63] ON [dbo].[EventComments] 
 (
  [EventID] ASC
 )

GO

CREATE NONCLUSTERED INDEX [fkIdx_66] ON [dbo].[EventComments] 
 (
  [UserID] ASC
 )

GO


IF NOT EXISTS (SELECT * FROM sys.tables t join sys.schemas s ON (t.schema_id = s.schema_id) WHERE s.name='dbo' and t.name='CampaignComments')
CREATE TABLE [dbo].[CampaignComments]
(
 [Id]        int IDENTITY (1, 1) NOT NULL ,
 [Comment]   nvarchar(max) NOT NULL ,
 [Rating]    nvarchar(max) NOT NULL ,
 [CreatedAt] datetime NOT NULL ,
 [CampaignID] int NOT NULL ,
 [UserID]    int NOT NULL ,


 CONSTRAINT [PK_campaigncomments] PRIMARY KEY CLUSTERED ([Id] ASC),
 CONSTRAINT [FK_74] FOREIGN KEY ([CampaignID])  REFERENCES [dbo].[Campaigns]([Id]),
 CONSTRAINT [FK_77] FOREIGN KEY ([UserID])  REFERENCES [dbo].[Users]([Id])
);
GO


CREATE NONCLUSTERED INDEX [fkIdx_75] ON [dbo].[CampaignComments] 
 (
  [CampaignID] ASC
 )

GO

CREATE NONCLUSTERED INDEX [fkIdx_78] ON [dbo].[CampaignComments] 
 (
  [UserID] ASC
 )

GO

IF NOT EXISTS (SELECT * FROM sys.tables t WHERE t.name='ConnectedBrands')
CREATE TABLE [ConnectedBrands]
(
 [Id]    int IDENTITY (1, 1) NOT NULL ,
 [Name]  nvarchar(max) NOT NULL ,
 [Image] nvarchar(max) NOT NULL ,


 CONSTRAINT [PK_connectedbrands] PRIMARY KEY CLUSTERED ([Id] ASC)
);
GO

