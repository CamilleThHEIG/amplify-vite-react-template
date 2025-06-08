import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data } from './data/resource';

//import { storage } from './storage/resource';
// et ajouter un "storage/ressource.ts"

defineBackend({
  auth,
  data,
  //storage
});
