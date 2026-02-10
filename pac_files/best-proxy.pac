function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 146.235.19.84:10810",
        "SOCKS 144.91.118.176:3128",
        "SOCKS 205.185.123.62:2555",
        "SOCKS 185.189.112.133:3128",
        "SOCKS 103.174.178.145:2005",
        "SOCKS 8.210.4.18:7779",
        "SOCKS 123.54.197.51:23528",
        "SOCKS 138.124.117.139:31645",
        "SOCKS 113.195.224.222:9999",
        "SOCKS 125.141.133.98:5566",
        "SOCKS 120.77.203.0:443",
        "SOCKS 51.89.68.78:9050",
        "SOCKS 20.27.11.248:8561",
        "SOCKS 176.74.197.163:36918",
        "SOCKS 188.191.164.55:4890",
        "SOCKS 51.222.241.8:42378",
        "SOCKS 146.235.19.84:10907",
        "SOCKS 141.11.42.163:1080",
        "SOCKS 123.54.197.51:21956",
        "SOCKS 47.88.104.126:3344",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}