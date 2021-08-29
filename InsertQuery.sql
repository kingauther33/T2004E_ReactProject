GO
    USE T2004E_ReactProject

GO

-- INSERT CAMPAIGNS --
INSERT INTO dbo.Campaigns(Title, Description, Content,TotalDonation, Sponsor, StartDate, EndDate) values
	('Campaign Title 1', 'Description Campaign 1', 
	'<h2>What is Lorem Ipsum?</h2><p><strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>',
	250.5, 'Sponsor Campaign 1', CONVERT(datetime, CURRENT_TIMESTAMP, 102), CONVERT(datetime, DATEADD(day, 7, CURRENT_TIMESTAMP), 102)),
	('Campaign Title 2', 'Description Campaign 2', 
	'<h2>What is Lorem Ipsum?</h2><p><strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>',
	150.8, 'Sponsor Campaign 2', CONVERT(datetime, CURRENT_TIMESTAMP, 102), CONVERT(datetime, DATEADD(day, 7, CURRENT_TIMESTAMP), 102)),
	('Campaign Title 3', 'Description Campaign 3', 
	'<h2>What is Lorem Ipsum?</h2><p><strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>',
	300, 'Sponsor Campaign 3', CONVERT(datetime, CURRENT_TIMESTAMP, 102), CONVERT(datetime, DATEADD(day, 7, CURRENT_TIMESTAMP), 102)),
	('Campaign Title 4', 'Description Campaign 4', 
	'<h2>What is Lorem Ipsum?</h2><p><strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>',
	100, 'Sponsor Campaign 4', CONVERT(datetime, CURRENT_TIMESTAMP, 102), CONVERT(datetime, DATEADD(day, 7, CURRENT_TIMESTAMP), 102)),
	('Campaign Title 5', 'Description Campaign 5', 
	'<h2>What is Lorem Ipsum?</h2><p><strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>',
	200.5, 'Sponsor Campaign 5', CONVERT(datetime, CURRENT_TIMESTAMP, 102), CONVERT(datetime, DATEADD(day, 7, CURRENT_TIMESTAMP), 102))

-- INSERT CATEGORIES --
INSERT INTO dbo.Categories(Name) values
	('Category 1'),
	('Category 2'),
	('Category 3'),
	('Category 4'),
	('Category 5')

-- INSERT CONNECTED BRANDS --
INSERT INTO dbo.ConnectedBrands(Name) values
	('Brand 1'),
	('Brand 2'),
	('Brand 3'),
	('Brand 4'),
	('Brand 5')

-- INSERT EVENTS --
INSERT INTO dbo.Events(Title, Description, Content, Organizer, Location, StartDate, EndDate) values
	('Event 1', 'Description Event 1',
	'<h2>What is Lorem Ipsum?</h2><p><strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>',
	'Organizer Event 1', 'Location Event 1', CONVERT(datetime, CURRENT_TIMESTAMP, 102), CONVERT(datetime, DATEADD(day, 7, CURRENT_TIMESTAMP), 102)),
	('Event 2', 'Description Event 2',
	'<h2>What is Lorem Ipsum?</h2><p><strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>',
	'Organizer Event 2', 'Location Event 2', CONVERT(datetime, CURRENT_TIMESTAMP, 102), CONVERT(datetime, DATEADD(day, 7, CURRENT_TIMESTAMP), 102)),
	('Event 3', 'Description Event 3',
	'<h2>What is Lorem Ipsum?</h2><p><strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>',
	'Organizer Event 3', 'Location Event 3', CONVERT(datetime, CURRENT_TIMESTAMP, 102), CONVERT(datetime, DATEADD(day, 7, CURRENT_TIMESTAMP), 102)),
	('Event 4', 'Description Event 4',
	'<h2>What is Lorem Ipsum?</h2><p><strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>',
	'Organizer Event 4', 'Location Event 4', CONVERT(datetime, CURRENT_TIMESTAMP, 102), CONVERT(datetime, DATEADD(day, 7, CURRENT_TIMESTAMP), 102)),
	('Event 5', 'Description Event 5',
	'<h2>What is Lorem Ipsum?</h2><p><strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>',
	'Organizer Event 5', 'Location Event 5', CONVERT(datetime, CURRENT_TIMESTAMP, 102), CONVERT(datetime, DATEADD(day, 7, CURRENT_TIMESTAMP), 102))

-- INSERT USERS --
INSERT INTO dbo.Users(FullName, Email, Password, Role) values
	('Dinh Van A', 'dinhvanA@gmail.com', '123456', 'admin'),
	('Pham Thi B', 'phamthiB@gmail.com', '12345678', 'admin'),
	('Dinh Thi A', 'dinhthiA@gmail.com', '123123', 'user'),
	('Doan Van B', 'doanvanB@gmail.com', '123123123', 'user'),
	('Pham Van A', 'phamvanA@gmail.com', '1234567890', 'user')

-- INSERT RECIPES --
INSERT INTO dbo.Recipes(Title, Description, PrepTime, CookTime, Ingredients, Tools, CategoryID) values
	('Recipe 1', 'Description recipe 1', 15, 10, 'Onions, Apple, Banana', 'Knife, Cutboard, Steamer', 1),
	('Recipe 2', 'Description recipe 2', 20, 15, 'Onions, Beef', 'Knife, Cutboard, Pan', 1),
	('Recipe 3', 'Description recipe 3', 30, 60, 'Onions, Beef, Fish', 'Knife, Cutboard, Steamer', 2),
	('Recipe 4', 'Description recipe 4', 30, 45, 'PineApple, Apple, Banana, Deer', 'Knife, Cutboard, Steamer', 2),
	('Recipe 5', 'Description recipe 5', 45, 120, 'Onions, Apple, Chicken', 'Knife, Cutboard, Steamer', 3)

-- INSERT CAMPAIGN COMMENTS --
INSERT INTO dbo.CampaignComments(Comment, Rating, CreatedAt, CampainID, UserID) values 
	('This is GOOD CAMPAIGN!', 4, CONVERT(datetime, CURRENT_TIMESTAMP, 102), 1, 1),
	('This is AWESOME CAMPAIGN!', 4, CONVERT(datetime, CURRENT_TIMESTAMP, 102), 1, 2),
	('This is MARVELOUS CAMPAIGN!', 5, CONVERT(datetime, CURRENT_TIMESTAMP, 102), 1, 3),
	('This is SHIT CAMPAIGN!', 1, CONVERT(datetime, CURRENT_TIMESTAMP, 102), 2, 3),
	('This is MARVELOUS CAMPAIGN!', 4, CONVERT(datetime, CURRENT_TIMESTAMP, 102), 3, 3),
	('This is SUPER AWESOME CAMPAIGN!', 5, CONVERT(datetime, CURRENT_TIMESTAMP, 102), 1, 4)

-- INSERT EVENT COMMENTS --
INSERT INTO dbo.EventComments(Comment, Rating, CreatedAt, EventID, UserID) values 
	('This is GOOD EVENT!', 4, CONVERT(datetime, CURRENT_TIMESTAMP, 102), 1, 1),
	('This is AWESOME EVENT!', 4, CONVERT(datetime, CURRENT_TIMESTAMP, 102), 1, 2),
	('This is MARVELOUS EVENT!', 5, CONVERT(datetime, CURRENT_TIMESTAMP, 102), 1, 3),
	('This is SHIT EVENT!', 1, CONVERT(datetime, CURRENT_TIMESTAMP, 102), 2, 3),
	('This is MARVELOUS EVENT!', 4, CONVERT(datetime, CURRENT_TIMESTAMP, 102), 3, 3),
	('This is SUPER AWESOME EVENT!', 5, CONVERT(datetime, CURRENT_TIMESTAMP, 102), 1, 4)