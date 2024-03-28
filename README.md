# IS21 Full Stack Developer (Kevin Lam)

Written Assignment for the IS21 Full Stack Developer role, production site accessible here: https://is21-2024.onrender.com/

![IS_21](https://github.com/KlamChowder1/IS21_2024/assets/24284083/31419f1a-bf8c-43ba-9bda-b9a8fe6850bb)

## Notes
- Instead of replicating the whole physical Kanban board to a digital one, I thought it would be more appropriate if the paint stock had quantifiable units (liters) of paint for more accurate/useful data to the painters. The status of [available, running low, out of stock] is still visible through the badge icon
- Kept frontend colour and UI simple for users who might not be as tech-savvy, simpler seemed better
- Did not implement sysadmin / user login because it wasn't in the Acceptance Criteria 
- Commit messages and PR method isn't as clean as I usually am, sorry (I would usually PR a feature branch and squash commits before merging to main)

## Future features

Backend
- Adding a POST / DELETE endpoint if painters want to add / delete paint colours in the future
- Adding tests

Frontend
- Adding buttons to link to the POST / DELETE endpoints
- Adding reset button on input field to reset to original value
- i18n translation for strings if this web application is to be used internationally
- Accessibility criteria (WCAG)
- Bulk update paint colour quantities instead of updating individually
- Test cross browser compatability (BrowserStack)
- Adding tests
