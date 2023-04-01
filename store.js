import { configureStore } from "@reduxjs/toolkit"
import {aboutReducer} from './Reducer/AboutReducer'
import { bannerReducer } from "./Reducer/BannerReducer";
import { brandReducer } from "./Reducer/BrandReducer";
import { contactUsReducer } from "./Reducer/ContactUsReducer";
import { inqueryReducer } from "./Reducer/InqueryReducer";
import { priceReducer } from "./Reducer/PriceReducer";
import { serviceReducer } from "./Reducer/ServiceReducer";
import { settingsReducer } from "./Reducer/SettingsReducer";
import { subscribeReducer } from "./Reducer/SubscribeReducer";
import { testimonialReducer } from "./Reducer/TestimonialReducer";
import { videoLinkReducer } from "./Reducer/VideoLinkReducer";


export const store = configureStore({
  reducer: {
    about: aboutReducer,
    banner: bannerReducer,
    brand: brandReducer,
    contact: contactUsReducer,
    inquery: inqueryReducer,
    price: priceReducer,
    service: serviceReducer,
    settings: settingsReducer,
    subscribe: subscribeReducer,
    testimonial: testimonialReducer,
    video: videoLinkReducer,
  },
});
