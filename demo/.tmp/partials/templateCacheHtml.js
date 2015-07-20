angular.module("trucksPlus").run(["$templateCache", function($templateCache) {$templateCache.put("app/components/footer/footer.html","<md-content class=\"footer\">Built with &hearts; - ninnemana.</md-content>");
$templateCache.put("app/components/navbar/navbar.html","<md-sidenav class=\"md-sidenav-left md-whiteframe-z2\" md-component-id=\"left\" md-is-locked-open=\"$mdMedia(\'gt-md\')\"><md-content layout-padding=\"\"></md-content></md-sidenav>");
$templateCache.put("app/components/header/header.html","<md-content><md-toolbar class=\"header-nav\"><div class=\"md-toolbar-tools\"><h2><a href=\"/\">Bookie</a></h2><span flex=\"\"></span></div></md-toolbar></md-content>");
$templateCache.put("app/controllers/book/book.html","<h1 ng-if=\"book.id\">Edit {{ book.title }}</h1><h1 ng-if=\"!book.id\">Add Book</h1><md-content layout-padding=\"\"><form name=\"bookForm\" ng-submit=\"save()\"><div layout=\"\" layout-sm=\"column\"><md-input-container style=\"width:80%\"><label>Title</label> <input ng-model=\"book.title\"></md-input-container></div><div layout=\"\" layout-sm=\"column\"><md-input-container style=\"width:80%\"><label>Author</label> <input ng-model=\"book.author\"></md-input-container></div><div layout=\"\" layout-sm=\"column\"><md-button class=\"md-raised md-primary\" type=\"submit\">Save</md-button></div></form></md-content>");
$templateCache.put("app/controllers/logout/logout.html","");
$templateCache.put("app/controllers/main/main.html","<md-content><h1>Books</h1><md-list><md-list-item class=\"md-3-line\" ng-repeat=\"book in books\"><div class=\"md-list-item-text\" layout=\"row\" layout-align=\"start space-between\"><span flex=\"5\"></span><div flex=\"65\"><h3>{{ book.title }} - {{ book.author }}</h3><p>{{ book.date_added }}</p></div><div flex=\"30\"><md-button href=\"/book/{{ book.id }}\" aria-label=\"edit\"><md-icon><i class=\"material-icons\">edit</i></md-icon></md-button><md-button aria-label=\"edit\" ng-click=\"delete(book)\"><md-icon><i class=\"material-icons\">delete</i></md-icon></md-button></div></div><md-divider></md-divider></md-list-item></md-list></md-content><div layout=\"row\" layout-align=\"end end\"><md-button href=\"/book/\" aria-label=\"menu\" class=\"md-fab md-primary\" layout-align=\"start end\"><md-icon><i class=\"material-icons\">add</i></md-icon></md-button></div>");
$templateCache.put("app/controllers/signup/signup.html","");}]);