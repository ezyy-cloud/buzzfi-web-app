// Utilities/store/appStore.ts
import { defineStore } from 'pinia'
import axios from 'axios'

// Define Voucher Type
interface Voucher {
  voucher_code: string;
  qos_usage_quota: number;
  end: number;
  // Add other fields based on the API response structure if needed
}

export const useAppStore = defineStore('app', {
  state: () => ({
    voucher: null as Voucher | null,
    loading: false as boolean,
    error: '' as string,
  }),

  actions: {
    async fetchVoucher (code: string) {
      this.loading = true
      this.error = ''
      try {
        const response = await axios.get(`https://buzzfiapi.af-south-1.elasticbeanstalk.com/api/vouchers/status/${code}`, {
          withCredentials: true, // Include this if you need to send cookies
        })
        this.voucher = response.data
      } catch (error: any) { // Use 'any' type for error to access response properties
        if (error.response) {
          // Server responded with a status other than 2xx
          console.error('Error Data:', error.response.data) // Log the response data for debugging
          console.error('Error Status:', error.response.status) // Log the response status
          this.error = error.response.data.message || 'Failed to fetch voucher status. Please try again.' // Use error message from server if available
        } else if (error.request) {
          // The request was made but no response was received
          console.error('Error Request:', error.request) // Log the request for debugging
          this.error = 'No response received from the server. Please check your network connection.'
        } else {
          // Something happened in setting up the request
          console.error('Error Message:', error.message) // Log the error message
          this.error = 'An error occurred while fetching the voucher status. Please try again.'
        }
      } finally {
        this.loading = false
      }
    },
  },
})
