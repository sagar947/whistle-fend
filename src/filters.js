import moment from 'moment';
import Vue from 'vue';

Vue.filter('formatDate', (value) => {
    if(moment(new Date()).get('year') == moment(value).get('year')) {
        return moment(value).format('MMM d')
    } else {
        return moment(value).format('MMM d, YYYY')
    }
});