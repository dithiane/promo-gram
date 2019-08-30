# [Elevator pitch of app]:
### What problem does the app solve in the market?
  - Connect social media influencers to business entities seeking exposure

### How is your app unique?  What differentiates it from other applications/solutions?
  - Business entities don't have to be a large/established business to get exposure
  - Influencers don't have to have millions of followers to get paid for social media marketing

### What tech stack and external tech do you plan on using and WHY?
  - Hosting: Firebase Hosting
  - Backend: Firebase Functions
  - Database: Firestore
  - Storage: Firebase Storage
  - Frontend: React/Redux
  - Styling: ? Bootstrap / Material / Ant / Custom ?

# [Data discussion]:
### - What tables/collections do you plan on having?
  - Users
  - Contracts
  - Campaigns
  - Messages
  - Notifications

### What would a row/document look like and what keys/data-types do you need to have?  What relationships do you need?
  - User:
    - email: String
    - password: String

    - influencerProfile: {
      - campaigns: []
      - contracts: []
      - social: {
        - facebook: {
          - followers: Number
          - link: String
        }
        - twitter: {
          - followers: Number
          - link: String
        }
        - instagram: {
          - followers: Number
          - link: String
        }
      }
    }

    - businessProfile {
      - campaigns: []
      - contracts: []
      - social {
        - facebook {
          - followers: Number
          - link
        }
        - twitter {
          - followers: Number
          - link
        }
        - instagram {
          - followers: Number
          - link
        }
      }
    }
  
    
  - Notification: 
    - userId: String
    - link: String
    - timestamp: String
    - seen: Boolean
  

  - Message: 



### What data do you need from external sources/API’s?
  - Social media profile data
  - Payment transactions

# [Architecture discussion]:
### Tentative Component tree:
  - ...

### State/Data management:
  - Redux

### Back-end architecture (Controllers, etc):
  - Endpoints: 
    - /auth:
      - /register
      - /login
      - /logout
    
    - /business:
      - /getNotifications
      - /getCampaigns
      - /createCampaign
      - /editCampaign
      - /deleteCampaign
      - /getCampaignApplicants
      - /approveInfluencerForCampaign
      - /denyInfluencerForCampaign
    
    - /influencer:
      - /apply
      - /getCampaigns
      - /getAppliedCampaigns
      - /unapply
      