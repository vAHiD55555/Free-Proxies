function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 62.60.131.189:5005",
        "SOCKS 67.43.228.250:26747",
        "SOCKS 217.172.122.14:8080",
        "SOCKS 213.35.110.67:10809",
        "SOCKS 104.37.175.200:22292",
        "SOCKS 83.219.250.8:62920",
        "SOCKS 178.33.162.89:58574",
        "SOCKS 146.235.19.84:10819",
        "SOCKS 103.28.121.58:80",
        "SOCKS 36.255.98.153:4039",
        "SOCKS 223.113.89.138:1080",
        "SOCKS 45.78.199.53:7777",
        "SOCKS 67.43.228.251:20569",
        "SOCKS 84.17.51.235:3128",
        "SOCKS 104.248.158.27:25100",
        "SOCKS 36.255.98.167:4002",
        "SOCKS 8.212.153.179:8080",
        "SOCKS 20.78.118.91:8561",
        "SOCKS 222.71.131.131:1080",
        "SOCKS 183.164.254.8:4216",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}