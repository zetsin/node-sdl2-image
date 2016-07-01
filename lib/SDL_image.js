var FFI = require('ffi')
var ArrayType = require('ref-array')
var Struct = require('ref-struct')
var Union = require('ref-union');
var ref = require('ref')


var IMG_InitFlags = exports.IMG_InitFlags = {
	IMG_INIT_JPG: 1,
	IMG_INIT_PNG: 2,
	IMG_INIT_TIF: 4,
	IMG_INIT_WEBP: 8,
}

var voit = exports.voit = ref.types.void
var uchar = exports.uchar = ref.types.uchar
var Uint8 = exports.Uint8 = uchar
var SDL_version = exports.SDL_version = Struct({
	major: Uint8,
	minor: Uint8,
	patch: Uint8,
})
var SDL_version_ptr = exports.SDL_version_ptr = ref.refType(SDL_version)
var uint32 = exports.uint32 = ref.types.uint32
var int32 = exports.int32 = ref.types.int32
var Uint32 = exports.Uint32 = uint32
var SDL_Color = exports.SDL_Color = Struct({
	r: Uint8,
	g: Uint8,
	b: Uint8,
	a: Uint8,
})
var SDL_Color_ptr = exports.SDL_Color_ptr = ref.refType(SDL_Color)
var SDL_Palette = exports.SDL_Palette = Struct({
	ncolors: int32,
	colors: SDL_Color_ptr,
	version: Uint32,
	refcount: int32,
})
var SDL_Palette_ptr = exports.SDL_Palette_ptr = ref.refType(SDL_Palette)
var c__S_SDL_PixelFormat_FI_padding_arr = ArrayType(Uint8, 2)
var voit_ptr = exports.voit_ptr = ref.refType(voit)
var SDL_PixelFormat = exports.SDL_PixelFormat = Struct({
	format: Uint32,
	palette: SDL_Palette_ptr,
	BitsPerPixel: Uint8,
	BytesPerPixel: Uint8,
	padding: c__S_SDL_PixelFormat_FI_padding_arr,
	Rmask: Uint32,
	Gmask: Uint32,
	Bmask: Uint32,
	Amask: Uint32,
	Rloss: Uint8,
	Gloss: Uint8,
	Bloss: Uint8,
	Aloss: Uint8,
	Rshift: Uint8,
	Gshift: Uint8,
	Bshift: Uint8,
	Ashift: Uint8,
	refcount: int32,
	next: voit_ptr,
})
var SDL_PixelFormat_ptr = exports.SDL_PixelFormat_ptr = ref.refType(SDL_PixelFormat)
var SDL_Rect = exports.SDL_Rect = Struct({
	x: int32,
	y: int32,
	w: int32,
	h: int32,
})
var SDL_BlitMap = exports.SDL_BlitMap = Struct({
})
var SDL_BlitMap_ptr = exports.SDL_BlitMap_ptr = ref.refType(SDL_BlitMap)
var SDL_Surface = exports.SDL_Surface = Struct({
	flags: Uint32,
	format: SDL_PixelFormat_ptr,
	w: int32,
	h: int32,
	pitch: int32,
	pixels: voit_ptr,
	userdata: voit_ptr,
	locked: int32,
	lock_data: voit_ptr,
	clip_rect: SDL_Rect,
	map: SDL_BlitMap_ptr,
	refcount: int32,
})
var SDL_Surface_ptr = exports.SDL_Surface_ptr = ref.refType(SDL_Surface)
var Uint8_ptr = exports.Uint8_ptr = ref.refType(Uint8)
var c__S_SDL_RWops_U_SDL_rwops_h_3164_S_SDL_rwops_h_3922 = exports.c__S_SDL_RWops_U_SDL_rwops_h_3164_S_SDL_rwops_h_3922 = Struct({
	base: Uint8_ptr,
	here: Uint8_ptr,
	stop: Uint8_ptr,
})
var c__S_SDL_RWops_U_SDL_rwops_h_3164_S_SDL_rwops_h_4037 = exports.c__S_SDL_RWops_U_SDL_rwops_h_3164_S_SDL_rwops_h_4037 = Struct({
	data1: voit_ptr,
	data2: voit_ptr,
})
var c__S_SDL_RWops_U_SDL_rwops_h_3164 = exports.c__S_SDL_RWops_U_SDL_rwops_h_3164 = Union({
	mem: c__S_SDL_RWops_U_SDL_rwops_h_3164_S_SDL_rwops_h_3922,
	unknown: c__S_SDL_RWops_U_SDL_rwops_h_3164_S_SDL_rwops_h_4037,
})
var SDL_RWops = exports.SDL_RWops = Struct({
	size: voit_ptr,
	seek: voit_ptr,
	read: voit_ptr,
	write: voit_ptr,
	close: voit_ptr,
	type: Uint32,
	hidden: c__S_SDL_RWops_U_SDL_rwops_h_3164,
})
var SDL_RWops_ptr = exports.SDL_RWops_ptr = ref.refType(SDL_RWops)
var string = exports.string = ref.types.CString
var SDL_Texture = exports.SDL_Texture = Struct({
})
var SDL_Texture_ptr = exports.SDL_Texture_ptr = ref.refType(SDL_Texture)
var SDL_Renderer = exports.SDL_Renderer = Struct({
})
var SDL_Renderer_ptr = exports.SDL_Renderer_ptr = ref.refType(SDL_Renderer)
var string_ptr = exports.string_ptr = ref.refType(string)

FFI.Library(process.platform == 'win32' ? 'SDL2' : 'libSDL2_image', {
	IMG_Linked_Version: [ SDL_version_ptr, [ ] ],
	IMG_Init: [ int32, [ int32, ] ],
	IMG_Quit: [ voit, [ ] ],
	IMG_LoadTyped_RW: [ SDL_Surface_ptr, [ SDL_RWops_ptr, int32, string, ] ],
	IMG_Load: [ SDL_Surface_ptr, [ string, ] ],
	IMG_Load_RW: [ SDL_Surface_ptr, [ SDL_RWops_ptr, int32, ] ],
	IMG_LoadTexture: [ SDL_Texture_ptr, [ SDL_Renderer_ptr, string, ] ],
	IMG_LoadTexture_RW: [ SDL_Texture_ptr, [ SDL_Renderer_ptr, SDL_RWops_ptr, int32, ] ],
	IMG_LoadTextureTyped_RW: [ SDL_Texture_ptr, [ SDL_Renderer_ptr, SDL_RWops_ptr, int32, string, ] ],
	IMG_isICO: [ int32, [ SDL_RWops_ptr, ] ],
	IMG_isCUR: [ int32, [ SDL_RWops_ptr, ] ],
	IMG_isBMP: [ int32, [ SDL_RWops_ptr, ] ],
	IMG_isGIF: [ int32, [ SDL_RWops_ptr, ] ],
	IMG_isJPG: [ int32, [ SDL_RWops_ptr, ] ],
	IMG_isLBM: [ int32, [ SDL_RWops_ptr, ] ],
	IMG_isPCX: [ int32, [ SDL_RWops_ptr, ] ],
	IMG_isPNG: [ int32, [ SDL_RWops_ptr, ] ],
	IMG_isPNM: [ int32, [ SDL_RWops_ptr, ] ],
	IMG_isTIF: [ int32, [ SDL_RWops_ptr, ] ],
	IMG_isXCF: [ int32, [ SDL_RWops_ptr, ] ],
	IMG_isXPM: [ int32, [ SDL_RWops_ptr, ] ],
	IMG_isXV: [ int32, [ SDL_RWops_ptr, ] ],
	IMG_isWEBP: [ int32, [ SDL_RWops_ptr, ] ],
	IMG_LoadICO_RW: [ SDL_Surface_ptr, [ SDL_RWops_ptr, ] ],
	IMG_LoadCUR_RW: [ SDL_Surface_ptr, [ SDL_RWops_ptr, ] ],
	IMG_LoadBMP_RW: [ SDL_Surface_ptr, [ SDL_RWops_ptr, ] ],
	IMG_LoadGIF_RW: [ SDL_Surface_ptr, [ SDL_RWops_ptr, ] ],
	IMG_LoadJPG_RW: [ SDL_Surface_ptr, [ SDL_RWops_ptr, ] ],
	IMG_LoadLBM_RW: [ SDL_Surface_ptr, [ SDL_RWops_ptr, ] ],
	IMG_LoadPCX_RW: [ SDL_Surface_ptr, [ SDL_RWops_ptr, ] ],
	IMG_LoadPNG_RW: [ SDL_Surface_ptr, [ SDL_RWops_ptr, ] ],
	IMG_LoadPNM_RW: [ SDL_Surface_ptr, [ SDL_RWops_ptr, ] ],
	IMG_LoadTGA_RW: [ SDL_Surface_ptr, [ SDL_RWops_ptr, ] ],
	IMG_LoadTIF_RW: [ SDL_Surface_ptr, [ SDL_RWops_ptr, ] ],
	IMG_LoadXCF_RW: [ SDL_Surface_ptr, [ SDL_RWops_ptr, ] ],
	IMG_LoadXPM_RW: [ SDL_Surface_ptr, [ SDL_RWops_ptr, ] ],
	IMG_LoadXV_RW: [ SDL_Surface_ptr, [ SDL_RWops_ptr, ] ],
	IMG_LoadWEBP_RW: [ SDL_Surface_ptr, [ SDL_RWops_ptr, ] ],
	IMG_ReadXPMFromArray: [ SDL_Surface_ptr, [ string_ptr, ] ],
	IMG_SavePNG: [ int32, [ SDL_Surface_ptr, string, ] ],
	IMG_SavePNG_RW: [ int32, [ SDL_Surface_ptr, SDL_RWops_ptr, int32, ] ],
}, exports)