import React from 'react';
import reactIcon from '../assets/icons/react.svg';
import lua from '../assets/icons/lua.svg';
import clojure from '../assets/icons/clojure.svg';
import vsc from '../assets/icons/vsc.svg';
import love from '../assets/icons/love.svg';
import glassfish from '../assets/icons/glassfish.svg';
import netbeans from '../assets/icons/netbeans.svg';
import typeScript from '../assets/icons/typeScript.svg';
import windows from '../assets/icons/windows.svg';

export const JS = (
    <svg viewBox="0 0 128 128" >
        <title>Javascript</title>
        <path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185h-125.184z"></path><path fill="#323330" d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zm-46.885-37.793h-11.709l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"></path>
    </svg>
);

export const JAVA = (
    <svg viewBox="0 0 128 128">
        <title>Java</title>
        <path fill="#0074BD" d="M47.617 98.12s-4.767 2.774 3.397 3.71c9.892 1.13 14.947.968 25.845-1.092 0 0 2.871 1.795 6.873 3.351-24.439 10.47-55.308-.607-36.115-5.969zM44.629 84.455s-5.348 3.959 2.823 4.805c10.567 1.091 18.91 1.18 33.354-1.6 0 0 1.993 2.025 5.132 3.131-29.542 8.64-62.446.68-41.309-6.336z"></path><path fill="#EA2D2E" d="M69.802 61.271c6.025 6.935-1.58 13.17-1.58 13.17s15.289-7.891 8.269-17.777c-6.559-9.215-11.587-13.792 15.635-29.58 0 .001-42.731 10.67-22.324 34.187z"></path><path fill="#0074BD" d="M102.123 108.229s3.529 2.91-3.888 5.159c-14.102 4.272-58.706 5.56-71.094.171-4.451-1.938 3.899-4.625 6.526-5.192 2.739-.593 4.303-.485 4.303-.485-4.953-3.487-32.013 6.85-13.743 9.815 49.821 8.076 90.817-3.637 77.896-9.468zM49.912 70.294s-22.686 5.389-8.033 7.348c6.188.828 18.518.638 30.011-.326 9.39-.789 18.813-2.474 18.813-2.474s-3.308 1.419-5.704 3.053c-23.042 6.061-67.544 3.238-54.731-2.958 10.832-5.239 19.644-4.643 19.644-4.643zM90.609 93.041c23.421-12.167 12.591-23.86 5.032-22.285-1.848.385-2.677.72-2.677.72s.688-1.079 2-1.543c14.953-5.255 26.451 15.503-4.823 23.725 0-.002.359-.327.468-.617z"></path><path fill="#EA2D2E" d="M76.491 1.587s12.968 12.976-12.303 32.923c-20.266 16.006-4.621 25.13-.007 35.559-11.831-10.673-20.509-20.07-14.688-28.815 8.548-12.834 32.229-19.059 26.998-39.667z"></path><path fill="#0074BD" d="M52.214 126.021c22.476 1.437 57-.8 57.817-11.436 0 0-1.571 4.032-18.577 7.231-19.186 3.612-42.854 3.191-56.887.874 0 .001 2.875 2.381 17.647 3.331z"></path>
    </svg>
);

export const UBUNTU = (
    <svg viewBox="0 0 128 128">
        <title>Ubuntu</title>
        <path fill="#DD4814" d="M64 3.246c-33.555 0-60.755 27.2-60.755 60.754 0 33.552 27.2 60.754 60.755 60.754 33.554 0 60.755-27.202 60.755-60.754 0-33.554-27.2-60.754-60.755-60.754zm13.631 20.922c2.242-3.881 7.2-5.21 11.08-2.972 3.88 2.242 5.208 7.2 2.966 11.08-2.238 3.88-7.197 5.208-11.077 2.967-3.877-2.239-5.206-7.198-2.969-11.075zm-13.631 4.595c3.262 0 6.417.453 9.414 1.281.529 3.259 2.463 6.262 5.548 8.042 3.079 1.775 6.642 1.953 9.725.789 5.998 5.898 9.901 13.919 10.47 22.854l-11.558.17c-1.067-12.103-11.222-21.593-23.599-21.593-3.565 0-6.948.792-9.98 2.203l-5.637-10.099c4.708-2.33 10.01-3.647 15.617-3.647zm-41.311 43.349c-4.482 0-8.113-3.632-8.113-8.112 0-4.481 3.63-8.113 8.113-8.113 4.479 0 8.111 3.631 8.111 8.113 0 4.479-3.632 8.112-8.111 8.112zm7.191.722c2.561-2.09 4.2-5.271 4.2-8.834 0-3.565-1.639-6.747-4.2-8.836 2.194-8.489 7.475-15.738 14.571-20.483l5.931 9.934c-6.092 4.287-10.074 11.369-10.074 19.385s3.981 15.098 10.074 19.383l-5.931 9.937c-7.099-4.744-12.38-11.995-14.571-20.486zm58.831 33.964c-3.879 2.241-8.838.912-11.077-2.969-2.241-3.877-.911-8.835 2.969-11.076 3.877-2.239 8.838-.908 11.077 2.969 2.24 3.88.91 8.839-2.969 11.076zm-.024-17.673c-3.083-1.166-6.645-.991-9.725.788-3.084 1.783-5.019 4.782-5.547 8.042-2.998.83-6.153 1.284-9.415 1.284-5.607 0-10.909-1.318-15.616-3.649l5.636-10.1c3.032 1.411 6.415 2.204 9.98 2.204 12.378 0 22.532-9.488 23.596-21.592l11.561.169c-.569 8.935-4.472 16.956-10.47 22.854z"></path>
    </svg>
)

export const APPLE =(
    <svg viewBox="0 0 128 128">
        <title>Apple</title>
        <path d="M97.905 67.885c.174 18.8 16.494 25.057 16.674 25.137-.138.44-2.607 8.916-8.597 17.669-5.178 7.568-10.553 15.108-19.018 15.266-8.318.152-10.993-4.934-20.504-4.934-9.508 0-12.479 4.776-20.354 5.086-8.172.31-14.395-8.185-19.616-15.724-10.668-15.424-18.821-43.585-7.874-62.594 5.438-9.44 15.158-15.417 25.707-15.571 8.024-.153 15.598 5.398 20.503 5.398 4.902 0 14.106-6.676 23.782-5.696 4.051.169 15.421 1.636 22.722 12.324-.587.365-13.566 7.921-13.425 23.639m-15.633-46.166c4.338-5.251 7.258-12.563 6.462-19.836-6.254.251-13.816 4.167-18.301 9.416-4.02 4.647-7.54 12.087-6.591 19.216 6.971.54 14.091-3.542 18.43-8.796"></path>
    </svg>
);
export const TS = (
    <img src={typeScript} style={{width: '100%'}} alt="react" title="React"/>
);

export const WINDOWS = (
    <img src={windows} style={{width: '100%'}} alt="react" title="React"/>
);

export const REACT = (
    <img src={reactIcon} alt="react" title="React"/>
);

export const LUA = (
    <img src={lua} alt="lua" style={{width: '100%'}} title="Lua"/>
);

export const CLOJURE = (
    <img src={clojure} alt="clojure"  style={{width: '100%'}} title="Clojure"/>
);

export const RUBY = (
    <svg viewBox="0 0 128 128">
        <title>Ruby</title>
        <path fill-rule="evenodd" clip-rule="evenodd" fill="#D91404" d="M35.971 111.33c27.466 3.75 54.444 7.433 81.958 11.188-9.374-15.606-18.507-30.813-27.713-46.144l-54.245 34.956zM125.681 24.947c-2.421 3.636-4.847 7.269-7.265 10.907-8.304 12.493-16.607 24.986-24.903 37.485-.462.696-1.061 1.248-.41 2.321 8.016 13.237 15.969 26.513 23.942 39.777 1.258 2.095 2.53 4.182 4.157 6.192 1.612-32.193 3.223-64.387 4.834-96.58l-.355-.102zM16.252 66.22c.375.355 1.311.562 1.747.347 7.689-3.779 15.427-7.474 22.948-11.564 2.453-1.333 4.339-3.723 6.452-5.661 6.997-6.417 13.983-12.847 20.966-19.278.427-.395.933-.777 1.188-1.275 2.508-4.902 4.973-9.829 7.525-14.898-3.043-1.144-5.928-2.263-8.849-3.281-.396-.138-1.02.136-1.449.375-6.761 3.777-13.649 7.353-20.195 11.472-3.275 2.061-5.943 5.098-8.843 7.743-4.674 4.266-9.342 8.542-13.948 12.882-1.222 1.152-2.336 2.468-3.288 3.854-3.15 4.587-6.206 9.24-9.402 14.025 1.786 1.847 3.41 3.613 5.148 5.259zM44.354 59.949c-3.825 16.159-7.627 32.227-11.556 48.823 18.423-11.871 36.421-23.468 54.3-34.987-14.228-4.605-28.41-9.196-42.744-13.836zM120.985 25.103c-15.566 2.601-30.76 5.139-46.15 7.71 5.242 12.751 10.379 25.246 15.662 38.096 10.221-15.359 20.24-30.41 30.488-45.806zM44.996 56.644c14.017 4.55 27.755 9.01 41.892 13.6-5.25-12.79-10.32-25.133-15.495-37.737-8.815 8.059-17.498 15.999-26.397 24.137zM16.831 75.643c-4.971 11.883-9.773 23.362-14.662 35.048 9.396-.278 18.504-.547 27.925-.825-4.423-11.412-8.759-22.6-13.263-34.223zM30.424 101.739l.346-.076c3.353-13.941 6.754-27.786 10.177-42.272-7.636 3.969-14.92 7.754-22.403 11.644 3.819 9.926 7.891 20.397 11.88 30.704zM115.351 22.842c-4.459-1.181-8.918-2.366-13.379-3.539-6.412-1.686-12.829-3.351-19.237-5.052-.801-.213-1.38-.352-1.851.613-2.265 4.64-4.6 9.245-6.901 13.868-.071.143-.056.328-.111.687 13.886-2.104 27.679-4.195 41.47-6.285l.009-.292zM89.482 12.288l36.343 10.054c-2.084-5.939-4.017-11.446-6.005-17.11l-30.285 6.715-.053.341zM33.505 114.007c-4.501-.519-9.122-.042-13.687.037-3.75.063-7.5.206-11.25.323-.386.012-.771.09-1.156.506 31.003 2.866 62.005 5.732 93.007 8.6l.063-.414c-9.938-1.357-19.877-2.714-29.815-4.07-12.384-1.691-24.747-3.551-37.162-4.982zM2.782 99.994c3.995-9.27 7.973-18.546 11.984-27.809.401-.929.37-1.56-.415-2.308-1.678-1.597-3.237-3.318-5.071-5.226-2.479 12.24-4.897 24.177-7.317 36.113l.271.127c.185-.297.411-.578.548-.897zM81.522 9.841c6.737-1.738 13.572-3.097 20.367-4.613.44-.099.87-.244 1.303-.368l-.067-.332c-9.571 1.287-19.141 2.575-29.194 3.928 2.741 1.197 4.853 2.091 7.591 1.385z"></path>
    </svg>
);

export const VSC = (
    <img src={vsc} alt="clojure"  style={{width: '100%'}} title="VSC"/>
);

export const NETBEANS = (
    <img src={netbeans} alt="clojure"  style={{width: '100%'}} title="NetBeans"/>
);

export const LOVE = (
    <img src={love} alt="clojure"  style={{width: '200%'}} title="Love 2D"/>
);

export const GLASSFISH = (
    <img src={glassfish} alt="clojure"  style={{width: '110%'}} title="GlassFish"/>
);

export const CPLUS = (
    <svg viewBox="0 0 128 128">
        <title>C++</title>
        <path fill="#9C033A" d="M117.5 33.5l.3-.2c-.6-1.1-1.5-2.1-2.4-2.6l-48.3-27.8c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.3.9 3.4l-.2.1c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4v-55.8c.1-.8 0-1.7-.4-2.6zm-35.5 32.5v-4h5v-5h5v5h5v4h-5v5h-5v-5h-5zm3.3-14c-4.2-7.5-12.2-12.5-21.3-12.5-13.5 0-24.5 11-24.5 24.5s11 24.5 24.5 24.5c9.1 0 17.1-5 21.3-12.4l12.9 7.6c-6.8 11.8-19.6 19.8-34.2 19.8-21.8 0-39.5-17.7-39.5-39.5s17.7-39.5 39.5-39.5c14.7 0 27.5 8.1 34.3 20l-13 7.5zm29.7 14h-5v5h-4v-5h-6v-4h6v-5h4v5h5v4z"></path>
    </svg>
);

export const GIT = (
    <svg className="devicon-git-plain" viewBox="0 0 128 128">
        <path fill="#F34F29" d="M124.742,58.378L69.625,3.264c-3.172-3.174-8.32-3.174-11.497,0L46.685,14.71l14.518,14.518c3.375-1.139,7.243-0.375,9.932,2.314c2.703,2.706,3.462,6.607,2.293,9.993L87.42,55.529c3.385-1.167,7.292-0.413,9.994,2.295c3.78,3.777,3.78,9.9,0,13.679c-3.78,3.78-9.901,3.78-13.683,0c-2.842-2.844-3.545-7.019-2.105-10.521L68.578,47.933l-0.002,34.341c0.922,0.455,1.791,1.063,2.559,1.828c3.779,3.777,3.779,9.898,0,13.683c-3.779,3.777-9.904,3.777-13.679,0c-3.778-3.784-4.088-9.905-0.311-13.683C58.079,83.169,59,82.464,60,81.992V47.333c-1-0.472-1.92-1.172-2.856-2.111c-2.861-2.86-3.396-7.06-1.928-10.576L40.983,20.333L3.229,58.123c-3.175,3.177-3.155,8.325,0.02,11.5l55.126,55.114c3.173,3.174,8.325,3.174,11.503,0l54.86-54.858C127.913,66.703,127.916,61.552,124.742,58.378z"/>
    </svg>
)

export const RAILS = (
    <svg viewBox="0 0 128 128">
        <title>Rails</title>
        <path d="M18.922 104.532v21.468h5.476v-5.591l4.983 4.983h8.402l-6.664-6.664s4.795-.078 5.157-7.01c0-6.361-4.8-7.186-10.343-7.186h-7.011zm5.737 5.824h4.722v3.824h-4.722v-3.824z"></path><path d="M48.358 104.619c-2.997-.017-7.155.261-7.155 5.911v14.92h5.62v-3.65h5.447v3.563h5.649v-15.644c0-4.907-5.452-5.1-8.373-5.1h-1.188zm-1.449 5.388h5.273v5.882h-5.273v-5.882z"></path><path d="M63.55 104.632h5.815v20.537h-5.815z"></path><path d="M75.454 104.905v20.537h13.995v-5.452h-8.269v-15.175l-5.726.09z"></path><path d="M107.986 104.722v5.543h-9.36v1.999h3.999s6.453-.09 6.453 6.452c0 6.543-3 6.907-9.088 6.907h-7.36v-4.998h8.451c2.544 0 2.685-.829 2.685-1.551 0-.721-1.3-1.056-3.946-1.056s-7.553-1.301-7.553-6.389c0-5.089 2.545-6.998 7.633-6.998 5.088.001 8.086.091 8.086.091z"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="#A62C46" d="M100.556 10.818c-9.749-4.811-19.734-5.3-29.958-1.687-9.408 3.326-16.913 9.277-22.491 17.381-9.44 13.716-16.296 28.682-20.141 44.938-1.966 8.322-3.241 16.304-2.898 24.897.028.698.131 1.653.2 1.653h48.214c-.137 0-.229-.288-.348-.593-2.536-6.475-4.545-12.891-5.933-19.705-1.995-9.784-3.039-19.541-.979-29.416 2.884-13.829 10.767-23.702 24.055-28.873 7.527-2.932 14.67-2.044 20.937 3.455.058.051.175.048.328.073l2.05-3.087c-3.946-3.758-8.282-6.69-13.036-9.036zM25.067 75.154l-9.45-.714-1.07 9.146 8.891 1.068 1.629-9.5zM33.069 47.135c-2.889-1.129-5.58-2.183-8.363-3.273-.928 2.638-1.794 5.093-2.704 7.675 2.919.936 5.668 1.817 8.524 2.731l2.543-7.133zM72.542 89.993c2.855.212 5.716.36 8.867.543-1.145-2.379-2.16-4.53-3.226-6.657-.116-.231-.51-.454-.777-.458-2.422-.035-4.847-.021-7.421-.021.579 2.1 1.084 4.035 1.674 5.945.088.288.563.624.883.648zM47.243 23.889l-6.353-4.207c-1.703 1.903-3.345 3.738-5.08 5.675l6.532 4.39 4.901-5.858zM67.477 66.515c-.009.257.222.665.446.767 2.289 1.028 4.601 2.008 7.119 3.093-.105-1.99-.176-3.654-.294-5.314-.022-.298-.163-.729-.384-.852-2.101-1.164-4.231-2.274-6.562-3.51-.128 2.129-.257 3.97-.325 5.816zM65.595 8.871l-4.35-4.936-5.989 3.113 4.356 5.307 5.983-3.484zM68.323 48.148c-.129.3.043.932.298 1.163 1.737 1.567 3.534 3.066 5.532 4.777.458-1.917.889-3.625 1.255-5.345.065-.307-.025-.813-.238-.983-1.555-1.254-3.159-2.446-4.822-3.716-.731 1.451-1.439 2.751-2.025 4.104zM78.267 6.276c2.22.062 4.443.034 6.788.034-.234-1.632-.345-2.87-.624-4.067-.083-.355-.621-.831-.982-.86-2.225-.181-4.46-.25-6.91-.367.327 1.647.576 3.099.928 4.526.076.304.518.728.8.734zM80.971 34.77c.113-.212.142-.598.023-.784-1.092-1.706-2.224-3.387-3.398-5.154l-3.803 3.491 5.259 5.827c.705-1.23 1.337-2.292 1.919-3.38zM85.071 23.168c.808 1.499 1.54 2.858 2.271 4.219 3.553-1.946 3.894-2.653 2.635-5.458l-4.906 1.239zM102.073 10.171c1.479.912 3.04 1.688 4.627 2.544l1.062-1.654-5.921-4.334c-.082.881-.206 1.499-.174 2.106.025.465.104 1.151.406 1.338zM106 21.868c-3-.351-4-.698-6-1.058v2.714c2 .173 3 .339 6 .513v-2.169z"></path>
    </svg>
)