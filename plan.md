1. Core features
    a. Users, ability to login/logout. User needs to register before accessing site.
        -Each user has default Avatar
        -Login and Name are different
    b. Main feed, each user can make announcement to main feed available on main page "/main"
        -It can be a photo, text or both.

    c. Each public activity can be commented/liked
    d. Add/delete friends

2. Nice to have features
    -Only friends can see your info beyond name and avatar
    -User have their won galleries


3. Database structure firebase/collections
    a. Users{
        id,
        login,
        name,
        surname,
        avatarUrl,
        registrationDate,
        friends{
            friend1{
                id,
                name,
                avatarUrl
            },
            ...
        }
    }
    b. MainfeedEvents{
        event1:{
            eventID,
            authorID
        }

    }
    c. Event{
        author: {
                id,
                name,
                avatarUrl
        },
        text,
        likes,
        imageUrl,
        comments{
            commentID,
            ...
        },
        creationDate


    }
    d. Comments{
        author: {
                id,
                name,
                avatarUrl
        },
        text,
        likes,
        creationDate
    }

4. Routing
bushbook.com/#/ - login page
/main - mainfeed, list of events
/user/$uid - user profile
/event/$eventID

