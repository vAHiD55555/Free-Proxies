function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 51.38.155.24:46069",
        "SOCKS 51.15.196.107:16379",
        "SOCKS 84.17.51.240:3128",
        "SOCKS 51.158.105.107:16379",
        "SOCKS 129.213.139.179:8080",
        "SOCKS 152.53.171.242:54215",
        "SOCKS 36.255.98.166:8561",
        "SOCKS 62.60.131.179:4201",
        "SOCKS 198.177.252.24:4145",
        "SOCKS 185.6.9.176:8072",
        "SOCKS 139.59.7.217:36590",
        "SOCKS 62.60.131.179:5726",
        "SOCKS 114.236.93.203:15800",
        "SOCKS 62.60.131.185:4317",
        "SOCKS 139.59.24.173:1080",
        "SOCKS 188.127.225.130:1080",
        "SOCKS 36.255.98.163:8829",
        "SOCKS 3.24.178.81:80",
        "SOCKS 36.255.98.153:25253",
        "SOCKS 62.60.131.189:5327",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}