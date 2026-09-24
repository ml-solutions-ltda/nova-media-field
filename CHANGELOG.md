# Release Notes

## 2.0.0 - 2026-09-24

- Add a reusable, read-only Nova index thumbnail field for URLs authorized by the host application.
- Make the File Manager an optional integration so the package can be installed in Laravel Nova 5 applications without pulling a Nova 4-only dependency.
- Make Spatie Media Library optional at the package level; only consumers using the existing `Media` field need it.
- Render a fallback when a preview URL is absent or fails, with accessible labels and bounded dimensions.
- Keep `Media` backed by Spatie Media Library; the new `Thumbnail` field does not create or manage media records.

## 1.0.0 - 2026-09-23

- Publish the package under the ML Solutions Composer vendor and PHP namespace.
- Add Laravel Nova 5 compatibility while retaining Laravel Nova 4.22 support.
- Update the Nova vendor route and installation documentation for the company package name.
