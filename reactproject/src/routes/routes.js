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
import HomeP from '../pages/User/HomeP';

// ADMIN
import AdminDashboard from '../pages/Admin/Dashboard/dashboard';

// CAMPAIGNS
import ManageCampaigns from '../pages/Admin/ManageCampaigns';
import ModifyCampaign from '../pages/Admin/ManageCampaigns/ModifyCampaign';
import AddCampaign from './../pages/Admin/ManageCampaigns/AddCampaign';

// EVENTS
import ManageEvents from '../pages/Admin/ManageEvents';
import AddEvent from '../pages/Admin/ManageEvents/AddEvent';
import ModifyEvent from '../pages/Admin/ManageEvents/ModifyEvent';

// RECIPES
import ManageRecipes from '../pages/Admin/ManageRecipes';
import AddRecipe from '../pages/Admin/ManageRecipes/AddRecipe';
import ModifyRecipe from '../pages/Admin/ManageRecipes/ModifyRecipe';

// CATEGORIES
import ManageCategories from '../pages/Admin/ManageCategories';
import ModifyCategory from '../pages/Admin/ManageCategories/ModifyCategory';
import AddCategory from '../pages/Admin/ManageCategories/AddCategory';
import Demo from '../pages/Demo';
import AdminRedirect from '../pages/AdminRedirect';
import RecipesDetail from "../pages/User/Recipes/recipesDetail";

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

// CAMPAIGNS
const ManageCampaignsRoute = {
	path: '/manage-campaigns',
	layout: AdminLayout,
	page: ManageCampaigns,
};

const ModifyCampaignRoute = {
	path: '/manage-campaigns/:id',
	layout: AdminLayout,
	page: ModifyCampaign,
};

const AddCampaignRoute = {
	path: '/manage-campaigns/add-campaign',
	layout: AdminLayout,
	page: AddCampaign,
};

// EVENTS
const ManageEventsRoute = {
	path: '/manage-events',
	layout: AdminLayout,
	page: ManageEvents,
};

const ModifyEventRoute = {
	path: '/manage-events/:id',
	layout: AdminLayout,
	page: ModifyEvent,
};

const AddEventRoute = {
	path: '/manage-events/add-event',
	layout: AdminLayout,
	page: AddEvent,
};

// RECIPES
const ManageRecipesRoute = {
	path: '/manage-recipes',
	layout: AdminLayout,
	page: ManageRecipes,
};

const ModifyRecipeRoute = {
	path: '/manage-recipes/:id',
	layout: AdminLayout,
	page: ModifyRecipe,
};

const AddRecipeRoute = {
	path: '/manage-recipes/add-recipe',
	layout: AdminLayout,
	page: AddRecipe,
};

// CATEGORIES
const ManageCategoriesRoute = {
	path: '/manage-categories',
	layout: AdminLayout,
	page: ManageCategories,
};

const ModifyCategoryRoute = {
	path: '/manage-categories/:id',
	layout: AdminLayout,
	page: ModifyCategory,
};

const AddCategoryRoute = {
	path: '/manage-categories/add-category',
	layout: AdminLayout,
	page: AddCategory,
};

const DemoRoute = {
	path: '/demo',
	layout: AdminLayout,
	page: Demo,
};

const HomeRoute = {
	path: '/',
	layout: UserLayout,
	page: HomeP,
};

const AdminRoute = {
	path: '/redirect',
	layout: LoginLayout,
	page: AdminRedirect,
};
const RecipesDetailRoute ={
	path:'/Recipes-detail',
	layout:UserLayout,
	page:RecipesDetail,
}

export const routes = [
	LoginCallBackRoute,
	AboutUsRoute,
	ContactUsRoute,
	EventsRoute,
	RecipesRoute,
	HomeRoute,
	CampaignsRoute,
	RecipesDetailRoute,

	AdminDashboardRoute,

	// ADMIN CAMPAIGNS
	ManageCampaignsRoute,
	AddCampaignRoute,
	ModifyCampaignRoute,

	// ADMIN CATEGORIES
	ManageCategoriesRoute,
	AddCategoryRoute,
	ModifyCategoryRoute,

	// ADMIN EVENTS
	ManageEventsRoute,
	AddEventRoute,
	ModifyEventRoute,

	// ADMIN RECIPES
	ManageRecipesRoute,
	AddRecipeRoute,
	ModifyRecipeRoute,

	DemoRoute,
	AdminRoute,
];
