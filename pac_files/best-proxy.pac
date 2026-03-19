function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 31.211.130.237:8192",
        "SOCKS 208.68.37.37:20202",
        "SOCKS 203.25.208.163:1145",
        "SOCKS 38.145.220.35:8443",
        "SOCKS 91.121.48.221:38711",
        "SOCKS 77.105.168.97:1080",
        "SOCKS 38.145.203.86:8443",
        "SOCKS 178.33.162.89:58574",
        "SOCKS 1.180.49.222:7302",
        "SOCKS 194.163.167.32:1080",
        "SOCKS 38.145.218.113:8443",
        "SOCKS 103.242.175.241:8899",
        "SOCKS 101.91.242.198:6688",
        "SOCKS 181.214.39.51:5719",
        "SOCKS 176.74.197.163:36918",
        "SOCKS 38.145.208.171:8443",
        "SOCKS 38.145.220.79:8443",
        "SOCKS 187.199.137.59:6881",
        "SOCKS 51.89.68.78:9050",
        "SOCKS 45.136.131.50:8443",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}