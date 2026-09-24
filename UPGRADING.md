# Upgrading

## To 2.0.0

- Composer no longer installs `stepanenko3/nova-filemanager` automatically. If you use `Media::fileManager()`, install and register a File Manager release compatible with your Laravel Nova version.
- The existing `Media` field still requires `spatie/laravel-medialibrary` and keeps its existing model contract. Add `spatie/laravel-medialibrary:^11.4` explicitly if your application uses that field.
- Use `Mlsolutions\NovaMediaField\Fields\Thumbnail` for read-only previews backed by a host application's own authorized URL. This field does not require a Spatie media model for the URL it displays.

## To 1.0.0

- Install the company package as `mlsolutions/nova-media-field`.
- Import the field using `Mlsolutions\\NovaMediaField\\Fields\\Media`.
- The package supports Laravel Nova `^4.22` and `^5.0`.
- If migrating from `stepanenko3/nova-media-field`, update Composer and PHP imports to the new package name and namespace.

## To 1.0.0
