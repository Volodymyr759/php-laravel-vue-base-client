import store from '@/store';

export default function authHeader() {
    return { Authorization: `Bearer ${store.state.auth.authUser.token}` }
}