import { ActionContext } from "vuex";
import router from '@/router';
import { IAuthUser } from "@/models/Auth";
import { ILoginDto } from "@/models/Auth";
import { IAuthState } from "./types";
import { State } from "./types";
import { loginAxios, logoutAxios, registerAxios } from "@/api/auth";
import { IRegisterDto } from "@/models/Auth";
import { IForgotPasswordDto } from "@/models/Auth";
import { IChangePasswordDto } from "@/models/Auth";

type Context = ActionContext<IAuthState, State>;

export default {
  namespaced: true,
  state: (): IAuthState => {
    const userFromLocalStorage = localStorage.getItem("user");
    return {
      authUser: userFromLocalStorage ? JSON.parse(userFromLocalStorage) : {},
      returnUrl: null,
      isAuthUserLoading: false,
      errorAuthUser: null
    };
  },
  getters: {},
  mutations: {
    setAuthUser(state: IAuthState, authUser: IAuthUser) {
      state.authUser = authUser;
    },
    setIsAuthUserLoading(state: IAuthState, isLoading: boolean) {
      state.isAuthUserLoading = isLoading;
    },
    setError(state: IAuthState, message: string) {
      state.errorAuthUser = message;
    },
  },
  actions: {
    async login( { commit, state }: Context, loginDto: ILoginDto ): Promise<IAuthUser | undefined> {
      try {
        commit("setError", null);
        commit("setIsAuthUserLoading", true);
        const authUser = await loginAxios(loginDto);
        localStorage.setItem("user", JSON.stringify(authUser));
        commit("setAuthUser", authUser);
        router.push(state.returnUrl || '/');
        return state.authUser;
      } catch (error) {
        commit("setError", error);
      } finally {
        commit("setIsAuthUserLoading", false);
      }
    },
    async logout({ commit }: Context): Promise<void> {
      try {
        commit("setError", null);
        commit("setIsAuthUserLoading", true);
        await logoutAxios();
        localStorage.removeItem('user');
        commit("setAuthUser", {} as IAuthUser);
        router.push('/login');
      } catch (error) {
        commit("setError", error);
      } finally {
        commit("setIsAuthUserLoading", false);
      }
    },
    async register( { commit, state }: Context, registerDto: IRegisterDto ): Promise<IAuthUser | undefined> {
      try {
        commit("setError", null);
        commit("setIsAuthUserLoading", true);
        const authUser = await registerAxios(registerDto);
        commit("setAuthUser", {} as IAuthUser);
        router.push('/login');
        return state.authUser;
      } catch (error) {
        commit("setError", error);
      } finally {
        commit("setIsAuthUserLoading", false);
      }
    },
    async forgotPassword( { commit, state }: Context, forgotPasswordDto: IForgotPasswordDto ): Promise<IAuthUser | undefined> {
      try {
        commit("setIsAuthUserLoading", true);

        console.log('forgotPasswordDto: ', forgotPasswordDto)
        commit("setError", 'ForgorPassword functionality is not implemented yet.');

        return state.authUser;
      } catch (error) {
        commit("setError", error);
      } finally {
        commit("setIsAuthUserLoading", false);
      }
    },
    async changePassword( { commit, state }: Context, changePasswordDto: IChangePasswordDto ): Promise<IAuthUser | undefined> {
      try {
        commit("setIsAuthUserLoading", true);

        console.log('changePasswordDto: ', changePasswordDto)
        commit("setError", 'ChangePasswordDto functionality is not implemented yet.');

        return state.authUser;
      } catch (error) {
        commit("setError", error);
      } finally {
        commit("setIsAuthUserLoading", false);
      }
    }
  },
};
