function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 69.164.206.96:13024",
        "SOCKS 43.160.195.20:20005",
        "SOCKS 121.128.121.144:3128",
        "SOCKS 218.4.192.62:7302",
        "SOCKS 103.174.178.137:1020",
        "SOCKS 61.160.66.130:5555",
        "SOCKS 212.33.248.45:1080",
        "SOCKS 103.114.53.2:8080",
        "SOCKS 110.235.255.252:1080",
        "SOCKS 168.235.110.63:3128",
        "SOCKS 159.65.230.91:20613",
        "SOCKS 138.201.139.252:12344",
        "SOCKS 173.212.237.43:43648",
        "SOCKS 31.211.142.115:8192",
        "SOCKS 95.111.226.235:3128",
        "SOCKS 109.245.231.73:8192",
        "SOCKS 43.157.34.94:1777",
        "SOCKS 110.235.248.81:1080",
        "SOCKS 8.142.3.145:3306",
        "SOCKS 141.11.210.35:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}