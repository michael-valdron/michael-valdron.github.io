(ns profile-site.core
  (:require [reagent.core :as r]
            [hipo.core :as h]
            [domina :as d]))
            ;;[domina.css :as dc]))

(enable-console-print!)

(def site-title "Michael Valdron")
(def image-url "")

(def person-name
  [:h4 [:b site-title]])
(def header-name
  [:h1 [:b site-title]])

;; Homepage Content
(defn homepage []
  [:div {:id "content"}
   [:h1 "Hello!"]
   [:p "test message"]])

(defn render-site []
  (r/render-component [homepage]
                      (js/document.getElementById "app"))
  (d/set-html! (d/by-id "person-name") (h/create person-name))
  (d/set-html! (d/by-id "header-name") (h/create header-name))
  (d/set-attr! (d/by-id "main-img") "src" image-url))

(render-site)
(println "This text is printed from src/profile-site/core.cljs. Go ahead and edit it and see reloading in action.")

;; define your app data so that it doesn't get over-written on reload

(defonce app-state (atom {:text "Hello world!"}))


(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)
