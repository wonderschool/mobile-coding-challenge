# ED Barahona Summary

I've gained valuable insights from building applications that scale. To prioritize code sustainability it is crucial to consider the changes over time, so we can address scale and growth as the application evolves.

- Code Sustainability
  - Time and Change
    - How code will need to adapt over time
- Scale and growth
  - How the organization will need to adapt as it evolves
- Trade-offs and costs
  - Make decisions based on time, scale and growth, taking into account business needs, and resources
    - The code base needs to react to change, both in tech or business needs
  - What is the expected lifetime of the code?
    - Libraries, OS, external APIs, resources
    - Maintenance, size of team, future growth

# Approach and TODOs

Due to the time constraint this project focuses on the mobile app architecture and not the UI/UX, there is a lot of room for improvement. I did find the directions to be a contradicting by calling the project "Greenfield" (start from scratch) while also stating to use the existing lint rules. I went ahead and made the conscious decision to use Typescript in order to make the codebase scalable for future developers. I upgraded Expo SDK to the latest version and added a lint rule to provide better support for Typescript.

- Code Scalability:
  - Named components instead of default exports
    - Default exports can lead to inconsistencies when multiple engineers are working on the same codebase and using different import names.
  - Abstracted navigators for scalability and readability
  - Components are very simple and encapsulated, the more complex apps could have individual component files in the component folder: MyComponent/ index.ts, view.tsx, styles.ts, interface.d.ts
    - The same applies to screens
- Mock data background prefetching animation at app launch (splash screen loader)
- Local storage: cache application data in local storage for faster load/saved data for cold starts (MMKV)
- I18n

  - Handle localization
  - Multiple currency types
  - https://github.com/zoontek/react-native-localize
  - https://github.com/fnando/i18n-js

- UI

  - Todo:

    - Error handling on for failed requests
    - Use animated skeleton (shimmer) or static UI skeleton components for component fallback
    - Use Suspense and place holders for image loaders
    - Add responsive theming: typography, base padding, margin,
    - Add FastImage library to handle item images and add image fallback
    - Better add to cart feedback, perhaps add a badge to the cart with total item count
    - haptic feedback

  - Would have styled differently
    - Card element for food items
  - Style edge cases
    - Add responsive sizing, fonts and margins based on screen dimensions
    - Properly handle item width
  - Theming
    - Typography: use a package such as typography to manage typography
    - UI Libs: Would have explored UI libraries and frameworks such as RNULIB, RN Elements, Paper, etc…
    - Tailwind CSS, explore styling options
  - Animations
    - Explorer animations for a better user experience
