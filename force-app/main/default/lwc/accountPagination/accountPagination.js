import { LightningElement, track } from 'lwc';
import getRecords from '@salesforce/apex/AccountPaginationController.getRecords';
import getTotalRecords from '@salesforce/apex/AccountPaginationController.getTotalRecords';

export default class AccountPagination extends LightningElement {
    @track data = [];
    @track columns = [
        { label: 'Name', fieldName: 'Name' },
        { label: 'Industry', fieldName: 'Industry' },
        { label: 'Phone', fieldName: 'Phone' }
    ];

    pageSize = 10; // Records per page
    currentPage = 1;
    totalRecords = 0;
    totalPages = 0;
    pageNumbers = [];

    connectedCallback() {
        this.loadTotalRecords();
    }

    // Load total number of accounts and generate page numbers
    loadTotalRecords() {
        getTotalRecords()
            .then(result => {
                this.totalRecords = result;
                this.totalPages = Math.ceil(this.totalRecords / this.pageSize);
                this.generatePageNumbers();
                this.loadRecords();
            })
            .catch(error => console.error(error));
    }

    // Load accounts for the current page
    loadRecords() {
        const offsetSize = (this.currentPage - 1) * this.pageSize;
        getRecords({ limitSize: this.pageSize, offsetSize })
            .then(result => this.data = result)
            .catch(error => console.error(error));
    }

    generatePageNumbers() {
        this.pageNumbers = [];
        for (let i = 1; i <= this.totalPages; i++) {
            this.pageNumbers.push({
                id: 'page-' + i,
                number: i,
                variant: i === this.currentPage ? 'brand' : 'neutral'
            });
        }
    }

    goToPage(event) {
        const selectedPage = parseInt(event.target.dataset.page);
        if (selectedPage !== this.currentPage) {
            this.currentPage = selectedPage;
            this.updatePageVariants();
            this.loadRecords();
        }
    }

    updatePageVariants() {
        this.pageNumbers = this.pageNumbers.map(p => ({
            ...p,
            variant: p.number === this.currentPage ? 'brand' : 'neutral'
        }));
    }
}
