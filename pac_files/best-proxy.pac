function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 69.164.206.96:13024",
        "SOCKS 89.110.80.195:10149",
        "SOCKS 202.40.178.230:64564",
        "SOCKS 51.15.133.214:16379",
        "SOCKS 183.98.143.134:8080",
        "SOCKS 194.87.77.22:80",
        "SOCKS 67.43.228.254:32715",
        "SOCKS 31.145.149.75:9090",
        "SOCKS 51.158.124.167:16379",
        "SOCKS 104.206.98.154:3128",
        "SOCKS 91.151.88.220:6618",
        "SOCKS 144.91.95.238:58237",
        "SOCKS 174.138.61.184:1080",
        "SOCKS 51.250.108.153:1080",
        "SOCKS 152.228.212.223:29272",
        "SOCKS 195.158.8.123:3128",
        "SOCKS 43.134.12.116:12214",
        "SOCKS 218.78.65.202:6688",
        "SOCKS 100.27.183.62:8080",
        "SOCKS 51.89.68.78:9050",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}