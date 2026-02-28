function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 125.141.133.98:5566",
        "SOCKS 167.172.109.12:39452",
        "SOCKS 103.114.53.2:8080",
        "SOCKS 205.185.123.62:2555",
        "SOCKS 47.82.66.142:1080",
        "SOCKS 5.255.117.250:1080",
        "SOCKS 223.113.134.105:22222",
        "SOCKS 104.248.158.27:25100",
        "SOCKS 125.227.225.157:3389",
        "SOCKS 205.185.120.241:5556",
        "SOCKS 51.158.68.133:8811",
        "SOCKS 141.11.42.163:1080",
        "SOCKS 104.248.146.99:3128",
        "SOCKS 115.127.80.1:9090",
        "SOCKS 185.244.208.195:23699",
        "SOCKS 89.249.65.191:3128",
        "SOCKS 34.158.73.60:3128",
        "SOCKS 125.128.12.24:3128",
        "SOCKS 51.15.5.21:60349",
        "SOCKS 8.142.3.145:3306",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}