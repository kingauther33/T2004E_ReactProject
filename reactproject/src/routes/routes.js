// LAYOUT
import LoginLayout from '../layout/LoginLayout';
import UserLayout from '../layout/UserLayout';
import AdminLayout from '../layout/AdminLayout';

// LOGIN
import LoginCallBack from '../pages/Login';

// USER
import AboutUs from '../pages/User/AboutUs';
import Campaigns from '../pages/User/Campaigns';
import ContactUs from '../pages/User/ContactUs';
import Recipes from '../pages/User/Recipes';

// ADMIN
import AdminDashboard from '../pages/Admin/Dashboard/dashboard';
import ManageCampaigns from '../pages/Admin/ManageCampaigns';
import ModifyCampaigns from '../pages/Admin/ManageCampaigns/ModifyCampaign';
import AddCampaign from './../pages/Admin/ManageCampaigns/AddCampaign';
import ManageEvents from '../pages/Admin/ManageEvents';
import ManageRecipes from '../pages/Admin/ManageRecipes';
import ManageCategories from '../pages/Admin/ManageCategories';
import Demo from '../pages/Demo';

const LoginCallBackRoute = {
	path: '/login-callback', // URL trên browser
	layout: LoginLayout, // LAYOUT ứng với từng ROUTE
	page: LoginCallBack, // PAGE ứng với ROUTE đó
};

const AboutUsRoute = {
	path: '/about-us',
	layout: UserLayout,
	page: AboutUs,
};

const CampaignsRoute = {
	path: '/campaigns',
	layout: UserLayout,
	page: Campaigns,
};

const ContactUsRoute = {
	path: '/contact-us',
	layout: UserLayout,
	page: ContactUs,
};

const EventsRoute = {
	path: '/events',
	layout: UserLayout,
	page: ContactUs,
};

const RecipesRoute = {
	path: '/recipes',
	layout: UserLayout,
	page: Recipes,
};

const AdminDashboardRoute = {
	path: '/admin-dashboard',
	layout: AdminLayout,
	page: AdminDashboard,
};

const ManageCampaignsRoute = {
	path: '/manage-campaigns',
	layout: AdminLayout,
	page: ManageCampaigns,
};

const ModifyCampaignsRoute = {
	path: '/manage-campaigns/:id',
	layout: AdminLayout,
	page: ModifyCampaigns,
};

const AddCampaignRoute = {
	path: '/manage-campaigns/add-campaign',
	layout: AdminLayout,
	page: AddCampaign,
};

const ManageEventsRoute = {
	path: '/manage-events',
	layout: AdminLayout,
	page: ManageEvents,
};

const ManageRecipesRoute = {
	path: '/manage-recipes',
	layout: AdminLayout,
	page: ManageRecipes,
};

const ManageCategoriesRoute = {
	path: '/manage-categories',
	layout: AdminLayout,
	page: ManageCategories,
};

const DemoRoute = {
	path: '/demo',
	layout: AdminLayout,
	page: Demo,
};

export const routes = [
	LoginCallBackRoute,
	AboutUsRoute,
	ContactUsRoute,
	EventsRoute,
	RecipesRoute,

	AdminDashboardRoute,

	// ADMIN Campaigns
	CampaignsRoute,
	AddCampaignRoute,
	ModifyCampaignsRoute,

	ManageCampaignsRoute,
	ManageEventsRoute,
	ManageRecipesRoute,
	ManageCategoriesRoute,
	DemoRoute,
];
