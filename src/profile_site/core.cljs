(ns profile-site.core
  (:require [reagent.core :as r]
            [hipo.core :as h]
            [domina :as d]
            [ajax.core :as ajx]))
            ;;[domina.css :as dc]))

(enable-console-print!)

;; define your app data so that it doesn't get over-written on reload

(defonce app-state (atom {:data {}}))

;; Const defs
(def site-title "Michael Valdron")
(def page-title "Home")
(def main-image-url "img/michael.jpg")

(def person-name
  [:h4 [:b site-title]])
(def header-name
  [:h1 [:b site-title]])

;; Content for each entry in portfolio
(defn portfolio-content [d]
  [:div {:class "w3-row-padding"}
   [:div {:class "w3-third w3-container w3-margin-bottom"}
    [:a {:href "#"} [:img {:src (get d :img) :alt (get d :title) :style {:width "100%"} :class "w3-hover-opacity"}]]
    [:div {:class "w3-container w3-white"}
     [:p [:b (get d :title)]]
     [:p (get d :desc)]]]])

;; Homepage Content
(defn homepage-content []
  [:div {:id "content" :class "w3-container"}])

(defn render-site []
  (r/render-component [homepage-content]
                      (js/document.getElementById "app"))
  (d/set-html! (d/by-id "person-name") (h/create person-name))
  (d/set-html! (d/by-id "header-name") (h/create header-name))
  (d/set-attr! (d/by-class "main-img") "src" main-image-url))

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)

(render-site)

;; Load JSON data source
;; (let [f ""]
;;   (.getJSON js/$ f (fn [json]
;;                      (swap! app-state :data (js->clj json :keywordize-keys true)))))

;; (println app-state)
