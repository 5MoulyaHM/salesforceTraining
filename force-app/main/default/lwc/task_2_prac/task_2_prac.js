import { LightningElement, track } from 'lwc';
 
export default class task_2_prac extends LightningElement {
    @track currentFilter = 'ALL';
 
   
    applications = [
        {
            id: 1,
            entityName: 'Finance Inc.',
            accountType: 'Optimum',
            step: '01 - About you',
            tab: 'Contact Details',
            lastEdited: '6 hours ago',
            duration: '1 Day',
            status: 'IN_PROGRESS',
            statusLabel: 'In Progress',
            badgeClass: 'badge inprogress'
        },
        {
            id: 2,
            entityName: 'Marina Hagg',
            accountType: 'Platinum Optimum',
            step: '03 - Financial Details',
            tab: 'Trusts',
            lastEdited: '2 Days ago',
            duration: '4 Days',
            status: 'IN_PROGRESS',
            statusLabel: 'In Progress',
            badgeClass: 'badge inprogress'
        },
        {
            id: 3,
            entityName: 'Jenna Vermeulen',
            accountType: 'Seafarer',
            step: '04 - Account details',
            tab: 'Your Future Deposits',
            lastEdited: '4 Days ago',
            duration: '10 Days',
            status: 'IN_PROGRESS',
            statusLabel: 'In Progress',
            badgeClass: 'badge inprogress'
        },
        {
            id: 4,
            entityName: 'Jane Doe',
            accountType: 'Optimum',
            step: '-',
            tab: '-',
            lastEdited: '8 Days ago',
            duration: '5 Days',
            status: 'APPROVED',
            statusLabel: 'Approved',
            badgeClass: 'badge approved'
        },
        {
            id: 5,
            entityName: 'John Wick',
            accountType: 'Platinum Optimum',
            step: '-',
            tab: '-',
            lastEdited: '5 Days ago',
            duration: '11 Days',
            status: 'CANCELLED',
            statusLabel: 'Cancelled',
            badgeClass: 'badge cancelled'
        },
        {
            id: 6,
            entityName: 'Lara Croft',
            accountType: 'Seafarer',
            step: '-',
            tab: '-',
            lastEdited: '21 Days ago',
            duration: '4 Days',
            status: 'DECLINED',
            statusLabel: 'Declined',
            badgeClass: 'badge declined'
        }
    ];
 
  
    get allCount() {
        return this.applications.length;
    }
 
    get inProgressCount() {
        return this.applications.filter(a => a.status === 'IN_PROGRESS').length;
    }
 
    get approvedCount() {
        return this.applications.filter(a => a.status === 'APPROVED').length;
    }
 
    get declinedCount() {
        return this.applications.filter(a => a.status === 'DECLINED').length;
    }
 
    get filteredApplications() {
        if (this.currentFilter === 'ALL') {
            return this.applications;
        }
        return this.applications.filter(app => app.status === this.currentFilter);
    }
 
    get hasApplications() {
        return this.filteredApplications.length > 0;
    }
 
    get summaryText() {
        const total = this.filteredApplications.length;
 
        if (this.currentFilter === 'IN_PROGRESS') {
            return `${total} Applications in progress`;
        }
        if (this.currentFilter === 'APPROVED') {
            return `${total} Approved applications`;
        }
        if (this.currentFilter === 'DECLINED') {
            return `${total} Declined applications`;
        }
        return `${total} Applications in total`;
    }
 
    get allCardClass() {
        return `stat-card${this.currentFilter === 'ALL' ? ' active' : ''}`;
    }
 
    get inProgressCardClass() {
        return `stat-card${this.currentFilter === 'IN_PROGRESS' ? ' active' : ''}`;
    }
 
    get approvedCardClass() {
        return `stat-card${this.currentFilter === 'APPROVED' ? ' active' : ''}`;
    }
 
    get declinedCardClass() {
        return `stat-card${this.currentFilter === 'DECLINED' ? ' active' : ''}`;
    }
 
    get allTabClass() {
        return `tab-item${this.currentFilter === 'ALL' ? ' active' : ''}`;
    }
 
    get inProgressTabClass() {
        return `tab-item${this.currentFilter === 'IN_PROGRESS' ? ' active' : ''}`;
    }
 
    get approvedTabClass() {
        return `tab-item${this.currentFilter === 'APPROVED' ? ' active' : ''}`;
    }
 
    get declinedTabClass() {
        return `tab-item${this.currentFilter === 'DECLINED' ? ' active' : ''}`;
    }
 
    
    handleCardClick(event) {
        const status = event.currentTarget.dataset.status;
        this.currentFilter = status;
    }
 
    handleTabClick(event) {
        const status = event.currentTarget.dataset.status;
        this.currentFilter = status;
    }
}
 