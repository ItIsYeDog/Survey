const mongoose = require('mongoose');

const SurveySchema = new mongoose.Schema({
    gender: {
        type: String,
        required: true,
        enum: ['mann', 'kvinne', 'annet']
    },
    age: {
        type: String,
        required: true,
        enum: ['under18', '18-24', '25-34', '35-44', '45-54', '55+']
    },
    treningFrekvens: {
        type: String,
        required: true,
        enum: ['aldri', '1-2_ganger', '3-4_ganger', '5_eller_flere']
    },
    treningsType: {
        type: String,
        required: true,
        enum: ['styrke', 'kondisjon', 'yoga', 'sport', 'annet']
    },
    treningsSosial: {
        type: String,
        required: true,
        enum: ['alene', 'sammen_med_andre', 'begge_deler']
    },
    treningsViktighet: {
        type: String,
        required: true,
        enum: ['ikke_viktig', 'litt_viktig', 'viktig', 'svaert_viktig']
    },
    treningssenter: {
        type: String,
        required: true,
        enum: ['aldri', 'sjeldent', 'noen_ganger', 'ofte', 'alltid']
    },
    treningsmaal: {
        type: String,
        required: true,
        enum: ['bli_sterkere', 'gaa_ned_i_vekt', 'holde_meg_sunn', 'redusere_stress', 'annet']
    },
    treningsVarighet: {
        type: String,
        required: true,
        enum: ['under_30_min', '30-60_min', '1-2_timer', 'over_2_timer']
    },
    treningsmotivasjon: {
        type: String,
        required: true,
        enum: ['resultater', 'energi', 'foele_meg_bra', 'sosialt', 'annet']
    },
    treningsrutine: {
        type: String,
        required: true,
        enum: ['ja', 'nei', 'noen_ganger']
    },
    treningLivskvalitet: {
        type: String,
        required: true,
        enum: ['helt_uenig', 'uenig', 'noytral', 'enig', 'helt_enig']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Survey', SurveySchema);