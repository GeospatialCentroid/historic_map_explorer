// js/config.js
const APP_CONFIG = {
    search: {
        // Define weights by logical type. You can easily add more here later 
        // (e.g., "creator": 0.6, "subject": 0.4) without touching filter_manager.js
        // Note wieght followed by '_col' will need to be defined in the app.csv file to be included
        field_weights: {
            title: 1.0,
            description: 0.5,
            creator: 0.75
        }
    }
};