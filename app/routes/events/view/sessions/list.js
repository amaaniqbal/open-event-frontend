import Route from '@ember/routing/route';

export default Route.extend({
  titleToken() {
    switch (this.get('params.session_status')) {
      case 'pending':
        return this.get('l10n').t('Pending');
      case 'confirmed':
        return this.get('l10n').t('Confirmed');
      case 'accepted':
        return this.get('l10n').t('Accepted');
      case 'rejected':
        return this.get('l10n').t('Rejected');
      default:
        return this.get('l10n').t('Session');
    }
  },
  model(params) {
    this.set('params', params);
    let filterOptions = [];
    if (params.session_status === 'pending') {
      filterOptions = [
        {
          name : 'state',
          op   : 'eq',
          val  : 'pending'
        }
      ];
    } else if (params.session_status === 'accepted') {
      filterOptions = [
        {
          name : 'state',
          op   : 'eq',
          val  : 'accepted'
        }
      ];
    } else if (params.session_status === 'rejected') {
      filterOptions = [
        {
          name : 'state',
          op   : 'eq',
          val  : 'rejected'
        }
      ];
    } else if (params.session_status === 'confirmed') {
      filterOptions = [
        {
          name : 'state',
          op   : 'eq',
          val  : 'confirmed'
        }
      ];
    } else {
      filterOptions = [];
    }
    return this.modelFor('events.view').query('sessions', {
      include      : 'event,speakers',
      filter       : filterOptions,
      'page[size]' : 10
    });
  }
});
