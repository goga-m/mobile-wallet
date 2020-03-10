import { EventEmitter, Injectable } from "@angular/core";
import { Keyboard } from "@ionic-native/keyboard/ngx";
import { Network } from "@ionic-native/network/ngx";
import { QRScanner, QRScannerStatus } from "@ionic-native/qr-scanner/ngx";
import { ScreenOrientation } from "@ionic-native/screen-orientation/ngx";
import { SocialSharing } from "@ionic-native/social-sharing/ngx";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import {
	DefaultLangChangeEvent,
	LangChangeEvent,
	MissingTranslationHandler,
	TranslateCompiler,
	TranslateLoader,
	TranslateParser,
	TranslateStore,
	TranslationChangeEvent,
} from "@ngx-translate/core";
import { Delegate, Network as ArkNetwork } from "ark-ts";
import { Observable, Subject } from "rxjs";

import { Profile, StoredNetwork, Wallet, WalletKeys } from "@/models/model";
import { UserDataService } from "@/services/user-data/user-data.interface";

@Injectable()
export class SplashScreenMock extends SplashScreen {
	show(): void {}
	hide(): void {}
}

@Injectable()
export class StatusBarMock extends StatusBar {
	isVisible: boolean;
	overlaysWebView(doesOverlay: boolean): void {}
	styleDefault(): void {}
	styleLightContent(): void {}
	styleBlackTranslucent(): void {}
	styleBlackOpaque(): void {}
	backgroundColorByName(colorName: string): void {}
	backgroundColorByHexString(hexString: string): void {}
	hide(): void {}
	show(): void {}
}

@Injectable()
export class QRScannerMock extends QRScanner {
	prepare(): Promise<QRScannerStatus> {
		return Promise.resolve(undefined);
	}

	scan(): Observable<string> {
		return new Observable(observer => {
			observer.next("");
			observer.complete();
		});
	}

	show(): Promise<QRScannerStatus> {
		return Promise.resolve(undefined);
	}

	hide(): Promise<QRScannerStatus> {
		return Promise.resolve(undefined);
	}

	openSettings(): void {}
}

@Injectable()
export class KeyboardMock extends Keyboard {
	hideKeyboardAccessoryBar(hide: boolean): void {}
	show(): void {}
	close(): void {}
	disableScroll(disable: boolean): void {}
	onKeyboardShow(): Observable<any> {
		return new Observable(observer => {
			observer.next("");
			observer.complete();
		});
	}
	onKeyboardHide(): Observable<any> {
		return new Observable(observer => {
			observer.next("");
			observer.complete();
		});
	}
}

@Injectable()
export class NetworkMock extends Network {
	type = "cellular";
	downlinkMax: string;
	onchange(): Observable<any> {
		return new Observable(observer => {
			observer.next("");
			observer.complete();
		});
	}
	onDisconnect(): Observable<any> {
		return new Observable(observer => {
			observer.next("");
			observer.complete();
		});
	}
	onConnect(): Observable<any> {
		return new Observable(observer => {
			observer.next("");
			observer.complete();
		});
	}
}

@Injectable()
export class SocialSharingMock extends SocialSharing {
	share(
		message?: string,
		subject?: string,
		file?: string | string[],
		url?: string,
	): Promise<any> {
		return Promise.resolve();
	}
}

@Injectable()
export class ScreenOrientationMock extends ScreenOrientation {
	type: string;
	ORIENTATIONS: {
		PORTRAIT_PRIMARY: string;
		PORTRAIT_SECONDARY: string;
		LANDSCAPE_PRIMARY: string;
		LANDSCAPE_SECONDARY: string;
		PORTRAIT: string;
		LANDSCAPE: string;
		ANY: string;
	};
	onChange(): Observable<void> {
		return new Observable(observer => {
			observer.complete();
		});
	}
	lock(orientation: string): Promise<any> {
		return new Promise((resolve, reject) => {
			resolve();
		});
	}
	unlock(): void {}
}

@Injectable()
export class UserDataProviderMock implements UserDataService {
	public currentNetwork: StoredNetwork;
	public currentWallet: Wallet;
	public currentProfile: Profile;
	public profiles: Record<string, Profile>;
	public networks: Record<string, StoredNetwork>;
	public onActivateNetwork$: Subject<StoredNetwork>;
	public onUpdateNetwork$: Subject<StoredNetwork>;
	public onCreateWallet$: Subject<Wallet>;
	public onUpdateWallet$: Subject<Wallet>;
	public onSelectProfile$: Subject<Profile>;

	public get isDevNet(): boolean {
		throw new Error("Method not implemented.");
	}
	public get isMainNet(): boolean {
		throw new Error("Method not implemented.");
	}
	public get defaultNetworks(): ArkNetwork[] {
		throw new Error("Method not implemented.");
	}
	public addOrUpdateNetwork(
		network: StoredNetwork,
		networkId?: string,
	): Observable<{ network: ArkNetwork; id: string }> {
		throw new Error("Method not implemented.");
	}
	public getNetworkById(networkId: string): StoredNetwork {
		throw new Error("Method not implemented.");
	}
	public removeNetworkById(networkId: string) {
		throw new Error("Method not implemented.");
	}
	public addProfile(profile: Profile) {
		throw new Error("Method not implemented.");
	}
	public getProfileByName(name: string) {
		throw new Error("Method not implemented.");
	}
	public getProfileById(profileId: string) {
		throw new Error("Method not implemented.");
	}
	public removeProfileById(profileId: string) {
		throw new Error("Method not implemented.");
	}
	public saveProfiles(profiles?: { [key: string]: any }) {
		throw new Error("Method not implemented.");
	}
	public encryptSecondPassphrase(
		wallet: Wallet,
		pinCode: string,
		secondPassphrase: string,
		profileId?: string,
	) {
		throw new Error("Method not implemented.");
	}
	public addWallet(
		wallet: Wallet,
		passphrase: string,
		pinCode: string,
		profileId?: string,
	) {
		throw new Error("Method not implemented.");
	}
	public updateWalletEncryption(oldPassword: string, newPassword: string) {
		throw new Error("Method not implemented.");
	}
	public removeWalletByAddress(address: string, profileId?: string): void {
		throw new Error("Method not implemented.");
	}
	public ensureWalletDelegateProperties(
		wallet: Wallet,
		delegateOrUserName: string | Delegate,
	): void {
		throw new Error("Method not implemented.");
	}
	public getWalletByAddress(address: string, profileId?: string): Wallet {
		throw new Error("Method not implemented.");
	}
	public updateWallet(
		wallet: Wallet,
		profileId: string,
		notificate?: boolean,
	): Observable<any> {
		throw new Error("Method not implemented.");
	}
	public saveWallet(
		wallet: Wallet,
		profileId?: string,
		notificate?: boolean,
	) {
		throw new Error("Method not implemented.");
	}
	public setWalletLabel(wallet: Wallet, label: string): Observable<any> {
		throw new Error("Method not implemented.");
	}
	public getWalletLabel(
		walletOrAddress: string | Wallet,
		profileId?: string,
	): string {
		throw new Error("Method not implemented.");
	}
	public setCurrentWallet(wallet: Wallet): void {
		throw new Error("Method not implemented.");
	}
	public clearCurrentWallet(): void {
		throw new Error("Method not implemented.");
	}
	public getCurrentProfile(): Profile {
		throw new Error("Method not implemented.");
	}
	public loadProfiles() {
		throw new Error("Method not implemented.");
	}
	public loadNetworks(): Observable<Record<string, StoredNetwork>> {
		throw new Error("Method not implemented.");
	}
	public getKeysByWallet(wallet: Wallet, password: string): WalletKeys {
		throw new Error("Method not implemented.");
	}
}

@Injectable()
export class TranslateServiceMock {
	store: TranslateStore;
	currentLoader: TranslateLoader;
	compiler: TranslateCompiler;
	parser: TranslateParser;
	missingTranslationHandler: MissingTranslationHandler;
	defaultLang: string;
	currentLang: string;
	langs: string[];
	translations: any;

	readonly onTranslationChange: EventEmitter<TranslationChangeEvent>;
	readonly onLangChange: EventEmitter<LangChangeEvent>;
	readonly onDefaultLangChange: EventEmitter<DefaultLangChangeEvent>;

	private useDefaultLang;
	private isolate;
	private extend;
	private loadingTranslations;
	private pending;
	private _onTranslationChange;
	private _onLangChange;
	private _onDefaultLangChange;
	private _defaultLang;
	private _currentLang;
	private _langs;
	private _translations;
	private _translationRequests;
	private updateLangs;
	private retrieveTranslations;
	private changeLang;
	private changeDefaultLang;

	setDefaultLang(lang: string): void {
		throw new Error("Method not implemented.");
	}

	getDefaultLang(): string {
		throw new Error("Method not implemented.");
	}

	use(lang: string): Observable<any> {
		throw new Error("Method not implemented.");
	}

	getTranslation(lang: string): Observable<any> {
		throw new Error("Method not implemented.");
	}

	setTranslation(
		lang: string,
		translations: Record<string, any>,
		shouldMerge?: boolean,
	): void {
		throw new Error("Method not implemented.");
	}

	getLangs(): Array<string> {
		throw new Error("Method not implemented.");
	}

	addLangs(langs: Array<string>): void {
		throw new Error("Method not implemented.");
	}

	getParsedResult(
		translations: any,
		key: any,
		interpolateParams?: Record<string, any>,
	): any {
		throw new Error("Method not implemented.");
	}

	get(
		key: string | Array<string>,
		interpolateParams?: Record<string, any>,
	): Observable<string | any> {
		throw new Error("Method not implemented.");
	}

	getStreamOnTranslationChange(
		key: string | Array<string>,
		interpolateParams?: Record<string, any>,
	): Observable<string | any> {
		throw new Error("Method not implemented.");
	}

	stream(
		key: string | Array<string>,
		interpolateParams?: Record<string, any>,
	): Observable<string | any> {
		throw new Error("Method not implemented.");
	}

	instant(
		key: string | Array<string>,
		interpolateParams?: Record<string, any>,
	): string | any {
		throw new Error("Method not implemented.");
	}

	set(key: string, value: string, lang?: string): void {
		throw new Error("Method not implemented.");
	}

	reloadLang(lang: string): Observable<any> {
		throw new Error("Method not implemented.");
	}

	resetLang(lang: string): void {
		throw new Error("Method not implemented.");
	}

	public getBrowserLang(): string {
		throw new Error("Method not implemented.");
	}

	public getBrowserCultureLang(): string {
		throw new Error("Method not implemented.");
	}
}
