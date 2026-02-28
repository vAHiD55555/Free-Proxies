function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 112.86.116.24:1080",
        "SOCKS 202.62.42.92:1080",
        "SOCKS 57.128.188.167:9158",
        "SOCKS 146.235.19.84:10852",
        "SOCKS 115.127.62.50:1088",
        "SOCKS 61.72.221.244:3128",
        "SOCKS 51.15.5.21:60349",
        "SOCKS 104.248.203.234:1080",
        "SOCKS 167.172.159.43:39019",
        "SOCKS 103.111.136.82:8199",
        "SOCKS 13.70.6.6:50161",
        "SOCKS 103.113.70.189:1081",
        "SOCKS 194.233.68.54:1088",
        "SOCKS 78.135.105.217:50504",
        "SOCKS 213.165.58.8:1080",
        "SOCKS 113.168.118.213:1080",
        "SOCKS 46.10.208.106:8192",
        "SOCKS 121.128.121.214:3128",
        "SOCKS 8.222.151.218:5566",
        "SOCKS 146.235.19.84:10868",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}