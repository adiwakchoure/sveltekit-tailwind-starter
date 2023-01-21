// This file was auto-generated by 'typesafe-i18n'. Any manual changes will be overwritten.
/* eslint-disable */
import type { BaseTranslation as BaseTranslationType, LocalizedString, RequiredParams } from 'typesafe-i18n'

export type BaseTranslation = BaseTranslationType
export type BaseLocale = 'en'

export type Locales =
	| 'en'
	| 'es'

export type Translation = RootTranslation

export type Translations = RootTranslation

type RootTranslation = {
	/**
	 * H​i​ ​{​n​a​m​e​}​!​ ​W​e​l​c​o​m​e​ ​t​o​ ​S​v​e​l​t​e​K​i​t
	 * @param {string} name
	 */
	HI: RequiredParams<'name'>
	/**
	 * T​h​i​s​ ​l​o​g​ ​w​a​s​ ​c​a​l​l​e​d​ ​f​r​o​m​ ​'​{​f​i​l​e​N​a​m​e​}​'
	 * @param {string} fileName
	 */
	log: RequiredParams<'fileName'>
}

export type TranslationFunctions = {
	/**
	 * Hi {name}! Welcome to SvelteKit
	 */
	HI: (arg: { name: string }) => LocalizedString
	/**
	 * This log was called from '{fileName}'
	 */
	log: (arg: { fileName: string }) => LocalizedString
}

export type Formatters = {}