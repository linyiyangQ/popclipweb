# Migrate from the Mac App Store (MAS) edition to the Standalone edition

The last released version of PopClip on the Mac App Store is v2023.9. This is
the final update that will be available through the store.

If you have the MAS edition of PopClip, you can migrate for free to the
Standalone edition to continue receiving updates.

::: info From the developer

I apologise for the inconvenience of having to migrate away from the Mac App
Store. I wrote an explanation for why PopClip left the store in a
[forum post](https://forum.popclip.app/t/popclip-is-leaving-the-mac-app-store/2188).
Thank you for your support and understanding. —Nick Moore, PopClip developer.

:::

## Proof of your MAS purchase is already in iCloud

If you use iCloud and ever ran PopClip 2023.7 or later from the MAS, then
PopClip has already recorded proof of your MAS purchase in your iCloud account.

On any Mac where you use the same iCloud account (including on new Macs in the
future), you can simply download the Standalone edition of PopClip from the
[downloads](/download) page and put it in the /Applications folder. It will
detect your MAS purchase and unlock itself.

![](./media/shot-mas-license-1.png "Standalone edition recognizing the MAS purchase")

## Homebrew

[Homebrew](https://brew.sh/) users can install the Standalone edition of PopClip
with the command `brew install popclip`. It will automatically unlock itself via
iCloud, as above.

## Full steps for migration

In case you do not use iCloud, or use a different iCloud account on a new Mac,
you can do the migration like this:

1. Install PopClip 2023.9 from the MAS, if it is not installed already. _If you
   need to install it, you can find it in the Purchased section your account
   page in the MAS._
2. Run PopClip (MAS edition) once, then quit it.
3. Go to the /Applications folder in Finder and drag the PopClip app to the
   Trash.
4. Download the latest version of PopClip (Standalone edition) from the
   [downloads](/download) page on this website.
5. Unzip the downloaded file and drag the new PopClip app to your /Applications
   folder.
6. Run the new PopClip app. It will detect your Mac App Store purchase and
   unlock itself. You can confirm this by checking the About pane in the
   preferences window.

## FAQs

- **What happens to my settings and extensions?**<br>Your settings and
  extensions will be preserved when you migrate to the Standalone edition.

- **How will I get future updates?**<br>After migrating to the Standalone
  edition, you will receive updates automatically through the in-app update
  mechanism. Make sure that "Check for Updates" is enabled in the PopClip
  preferences.

- **Are there any differences between the MAS and Standalone editions?**
  <br>There are no functional differences between the MAS and Standalone
  editions. They are both built from the exact same codebase. Only the method of
  distribution is different.

- **How can I tell which edition of PopClip I have?**<br>In the PopClip
  preferences window, the About pane shows the edition of PopClip you are using.

![](./media/shot-2024-3-about.png "About pane for PopClip 2024.3, Standalone edition")
